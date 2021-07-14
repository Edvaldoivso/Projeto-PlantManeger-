import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,



} from 'react-native';


import { Button } from '../components/Button'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {useNavigation} from '@react-navigation/core'

export function UserIdentification() {
    //Função de Estados
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();

    //Função de Ação
    function handlerInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFocused(!!value);
        setName(value);
    }


   

    function handleSubmit() {

        navigation.navigate('Confirmation')
    }

    return (

        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                {isFilled ? '😃' : '😊'}
                            </Text>

                            <Text style={styles.Title}>Como podemos {'\n'}
                    chamar você ?
                        </Text>

                        </View>
                        <TextInput style={[

                            styles.input,
                            (isFocused || isFilled) &&
                            { borderColor: colors.green_dark }

                        ]}
                            placeholder='Digite um nome'
                            onBlur={handlerInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.footer}>
                            <Button 
                            title='Confirmar'
                            
                            onPress={handleSubmit}
                            />
                        </View>
                    </View>


                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    content: {
        flex: 1,
        width: '100%',
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    header: {
        alignItems: 'center',

    },

    emoji: {
        fontSize: 44,
    },
    input: {

        borderBottomWidth: 1,
        borderColor: colors.gray,
        width: '75%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',

    },
    Title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20,
    },
    footer: {
        marginTop: 40,
        width: '70%',
        paddingHorizontal: 20,
    },

})