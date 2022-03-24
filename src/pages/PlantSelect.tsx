import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, BackHandler, ActivityIndicator} from "react-native";

import { Header } from "../components/Header";
import { color } from "react-native-reanimated";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { EnviromentButton } from "../components/EnviromentButton";
import api from "../services/api";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Load } from "../components/Load"
interface EnviromentProps {
  Key: string;
  title: string;
  photo: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredplants, setfilteredPlants] = useState<PlantProps[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState("all");
  const [Loading, setLoad] = useState(true);
  const [page , setPage] = useState(1);
  const [loadingMore , setLoadingMore ] = useState(false);
  const [loadedAll , setLoadedAll ] = useState(false);

 

  function handleEnviromentSelected(enviroment: string) {
    setEnviromentSelected(enviroment);

    if (enviroment == "all") return setfilteredPlants(plants);

    const filtered = plants.filter((plant) =>
      plant.environments.includes(enviroment)
    );

    setfilteredPlants(filtered);
  }


  


  async function fetchPlants() { 
      const { data } = await api
      .get(`plants?_sort=name&order=asc&_page=${page}&_limit=8`);


      if(!data)
      return setLoad(true);

if(page > 1){

  setPlants(oldValue => [...oldValue, ...data])
  setfilteredPlants(oldValue => [...oldValue, ...data])

}else{
  setPlants(data);
  setfilteredPlants(data)
}


      setLoadingMore(false)
      setLoad(false)
    }

    




function handleFetchMore (distance: number){
  if(distance < 1)
  return;

  setLoadingMore(true);
  setPage(oldValue => oldValue + 1);
  fetchPlants();
}







  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get(
        "plants_environments?_sort=title&order=asc"
      );

      setEnviroments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }

    fetchEnviroment();
  }, []);

  useEffect(() => {
  fetchPlants();
  }, []);

if(Loading)
return <Load/> 



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={enviroments}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active={item.key == enviromentSelected}
              onPress={() => handleEnviromentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View style={styles.plantas}>
        <FlatList
          data={filteredplants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold = { 0.1 }
          onEndReached = {({ distanceFromEnd }) =>
          handleFetchMore(distanceFromEnd) }
          ListFooterComponent ={
            loadingMore
            ?
            <ActivityIndicator color={ colors.green } />
            : <></>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  header: {
    paddingHorizontal: 30,
  },

  enviromentList: {
    height: 40,
    paddingBottom: 5,
    marginRight: 32,
    marginVertical: 32,
  },

  plantas: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
});
