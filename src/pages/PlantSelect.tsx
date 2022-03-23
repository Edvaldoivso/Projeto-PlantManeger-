import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { Header } from "../components/Header";
import { color } from "react-native-reanimated";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { EnviromentButton } from "../components/EnviromentButton";
import api from "../services/api";
import { PlantCardPrimary } from "../components/PlantCardPrimary";

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

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get("plants_environments");
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
    async function fetchPlants() {
      const { data } = await api.get("plants");
      setPlants(data);
    }

    fetchPlants();
  }, []);

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
          renderItem={({ item }) => <EnviromentButton title={item.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>





      <View style={styles.plantas}>
        <FlatList
          data={plants}
          renderItem={({ item }) => <PlantCardPrimary data={ item } />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
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
    paddingHorizontal:32,
    justifyContent:"center"
   
  },
});
