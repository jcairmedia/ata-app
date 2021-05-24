import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../Theme/appTheme";

export const CustomSubtitle = ({ text }) =>
{
    return (
        <View
            style={{
                ...styles.mainContainer,
            }}>

            <Text
                style={{
                    ...styles.subtitle,
                    textAlign: 'center'
                }}>
                { text }
            </Text>

        </View>
    );
}