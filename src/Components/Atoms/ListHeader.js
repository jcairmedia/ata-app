import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {fontSize, styles} from "../../Theme/appTheme";

export const ListHeader = ({ title }) =>
{
    return(
        <View style={{
            ...styles.mainContainer,
        }}>

            <Text style={{
                ...styles.mainTitle,
                fontSize: 25,
                marginVertical: 10
            }}>
                { title }
            </Text>

        </View>
    );
}