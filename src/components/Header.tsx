import React from 'react';
import {
StyleSheet,
Text,
Image,
View

} from 'react-native';
import colors from '../../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import ReiJulian from '../assets/watering.png'
import fonts from '../../styles/fonts';
import { processFontFamily } from 'expo-font';

export function Header(){

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá</Text>
                <Text style={styles.UserName}>Edvaldo</Text>
            </View>
            <Image source = {ReiJulian} style={styles.image}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:getStatusBarHeight(),
        backgroundColor:colors.gray
    },

 greeting:{
     fontSize:32,
     color:colors.heading,
     fontFamily:fonts.text
    },

 UserName:{
fontSize:32,
fontFamily:fonts.heading,
color:colors.heading,
lineHeight:40


 },

 image:{
     width:80,
     height:80,
     borderRadius:80
}

})