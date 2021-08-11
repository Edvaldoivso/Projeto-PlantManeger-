import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

import {
    RectButton,
    RectButtonProps
} from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;

}

export function EnviromentButton({

    title,
    active = false,
    ...rest
}: EnviromentButtonProps) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>


        </RectButton>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 12,
    },

    containerActive: {

        backgroundColor: colors.green_light

    },

    text: {
        color: colors.heading,
        fontFamily: fonts.text,

    },
    TextActive: {
        fontFamily: fonts.heading,
        color: colors.green
    }


})