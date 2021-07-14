import React from 'react';
import {

  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
}
  from 'react-native';

import { Entypo } from '@expo/vector-icons';
import colors from '../../styles/colors';
import wateringImg from '../assets/watering.png'
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';


export function Welcome() {

  const navigation = useNavigation();

  function handleStart() {

    navigation.navigate('UserIdentification')
  }


  return (

    <SafeAreaView
      style={style.container}
    >
      <View style={style.wrapper}>
        <Text style={style.title}>
          Gerencie {'\n'}
            suas plantas de{'\n'}
            Forma Fácil
                </Text>

        <Image
          source={wateringImg}
          style={style.imagem}
          resizeMode="contain"

        />

        <Text
          style={style.subtitle}
        >
          Não esqueca mais de regar suas plantas. Nós cuidamos de
          lembrar você sempre que precisar.
          </Text>

        <TouchableOpacity
          style={style.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >

          <Text
            style={style.buttonIcon}>

            <Entypo
              name="chevron-thin-right"
              style={style.buttonIcon}
            />

          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}



const style = StyleSheet.create({


  container: {
    flex: 1,
  },


  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },


  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.green_dark,
    marginTop: 38,
    textAlign: 'center',
    fontFamily: fonts.heading,
    lineHeight: 34
  },


  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.green_dark,
    fontFamily: fonts.text,
  },


  imagem: {
    height: Dimensions.get('window').width * 0.7,
  },


  button: {
    //backgroundColor: colors.green,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },




  buttonIcon: {
    color: colors.white,
    fontSize: 28,
  },

})