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
                marginTop: 10,
                marginBottom: 30,
            }}>
                { title }
            </Text>

        </View>
    );
}