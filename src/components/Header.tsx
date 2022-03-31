import React,{useEffect , useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header(){

const[ userName , setUserName ] = useState<string>();

useEffect(()=>{

    async function loadStorangeUserName(){

const user = await AsyncStorage.getItem('@plantmaneger:user');
setUserName(user || "Plant Maneger");
    }
    loadStorangeUserName()
},[])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá</Text>
                <Text style={styles.UserName}>
                {userName}
                </Text>
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