import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from "../../Theme/appTheme";

export const Hyperlink = ({ title, boldText, onPress, color }) =>
{
    return(
        <View style={{
            ...styles.mainContainer,
            justifyContent: 'center',
        }}
        >

            <TouchableOpacity
                onPress={ onPress }>
                <Text style={{
                    ...styles.hyperlink,
                    color: color
                }}>
                    { title }
                    <Text style={{ fontWeight:'bold' }}>
                        { boldText }
                    </Text>
                </Text>
            </TouchableOpacity>

        </View>
    );
}