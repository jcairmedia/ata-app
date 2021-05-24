import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../Theme/appTheme";

export const CustomTitle = ({ text }) =>
{
    return (
        <View
            style={{
                ...styles.mainContainer,
            }}>

            <Text
                style={{
                    ...styles.mainTitle,
                    textAlign: 'center'
                }}>
                {text}
            </Text>

        </View>
    );
}