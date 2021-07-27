import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import colors from '../../styles/colors';

export function PlantSelect() {
    return (
        <view>

            <Text>Selecionar Planta</Text>

        </view>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    }

})