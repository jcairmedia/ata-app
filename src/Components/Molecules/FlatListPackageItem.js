import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import {colors, styles} from "../../Theme/appTheme";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";

export const FlatListPackageItem = ({ title, service, data }) => {

    return (
        <TouchableOpacity style={{
            ...styles.mainContainer,
            justifyContent: 'space-between',
            borderColor: colors.secondary,
            borderWidth: 3,
            borderRadius: 5,
            marginHorizontal: 10,
            marginVertical: 10,
            padding: 10,
            minHeight: 130
        }}>

            <Text style={{
                ...styles.mainTitle,
            }}>
                Paquete { title }
            </Text>

            <Text
                style={{
                fontWeight: 'bold',
                    color: colors.secondary
            }}>
                { service }
            </Text>


            <Text>
            <Text style={{
                fontWeight: 'bold',
                textAlign: 'right'
            }}>
                Fecha de inicio: {' '}
            </Text>
                { data }
            </Text>

        </TouchableOpacity>
    );

}

