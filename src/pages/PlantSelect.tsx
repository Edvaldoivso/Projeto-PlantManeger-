import React from 'react';
import{
    View,
    Text,
    StyleSheet

} from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../styles/colors';

export function PlantSelect(){

    return (
        <View style={styles.container}>
<Text>Selecionar Planta</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
        justifyContent:'center',
        alignItems:'center'
    }
});