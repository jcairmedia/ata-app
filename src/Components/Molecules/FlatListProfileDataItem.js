import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import {colors, styles} from "../../Theme/appTheme";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";

export const FlatListProfileDataItem = ({ title, data }) => {

    return (
        <View style={{
            ...styles.secondaryContainer,
            justifyContent: 'space-between',
            marginVertical: 10,
        }}>

            <Text style={{
                ...styles.mainTitle,
                opacity: 0.5
            }}>
                { title }
            </Text>

            <Text>
                { data }
            </Text>

        </View>
    );

}

