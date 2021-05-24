import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../Theme/appTheme";

export const CustomCaption = ({ text }) =>
{
    return (
        <View
            style={{
                ...styles.mainContainer,
            }}>

            <Text
                style={{
                    ...styles.caption,
                    textAlign: 'center'
                }}>
                { text }
            </Text>

        </View>
    );
}