import React from "react";

import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SvgFromUri } from "react-native-svg";

import waterdrop from '../assets/waterdrop.png'




export function PlantSave() {
  return (
      <>
    <View style={styles.container}>
      <SvgFromUri uri="" height={150} width={150} />
      <Text style={styles.plantName}>Nome da Planta</Text>
      <Text style={styles.plantAbout}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos vitae ad
        explicabo vero deleniti tempora et quibusdam, voluptatem tenetur
        delectus temporibus est voluptatum doloribus unde pariatur ipsa repellat
        sint totam!
      </Text>
    </View>

    <View style={styles.controller}>
    <View style={styles.tipContainer}>
    <Image source={waterdrop}
    style={styles.tipImagem}
    />
    </View>
    
    </View>
    </>
  );
}





const styles = StyleSheet.create({

container:{

},
plantName:{

},
plantAbout:{

},
controller:{

},
tipContainer:{

},

tipImagem:{


}

})