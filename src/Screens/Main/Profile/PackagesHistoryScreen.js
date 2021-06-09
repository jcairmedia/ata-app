import React, {useState} from "react"
import {ImageBackground, StyleSheet, Text, View, FlatList, Image, ScrollView} from "react-native";
import {colors, styles} from "../../../Theme/appTheme";
import {localImages} from "../../../Assets/assets";
import {NavigationHeader} from "../../../Components/Organisms/NavigationHeader";
import {StatusIndicator} from "../../../Components/Atoms/StatusIndicator";


export const PackagesHistoryScreen = () =>
{

    return (
        <View style={styles.mainContainer}>

            <NavigationHeader title={"Historial del Caso"}/>

            <View
                style={{
                    ...styles.mainContainer,
                    maxHeight: 80,
                }}>

                <ImageBackground
                    source={localImages.packagesBanner}
                    style={{
                        ...styles.backgroundContainer,
                        alignItems: 'center',
                    }}>

                    <View
                        style={{
                            paddingVertical: 2,
                            borderBottomColor: colors.primaryColor,
                            borderBottomWidth: 5,
                            minWidth: '35%'
                        }}>

                        <Text
                            style={{
                                ...styles.mainTitle,
                                textAlign: 'center',
                                textTransform: 'uppercase'
                            }}>

                             Historico del caso
                        </Text>
                    </View>

                </ImageBackground>
            </View>

            <View
                style={{
                    ...styles.mainContainer,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>



                <View style={{
                    ...styles.mainContainer,
                    margin: 20
                }}>
                    <Text style={{
                        ...styles.subtitle,
                    }}>
                        Revisa aquí las actualizaciones que ha tenido tu caso a través del tiempo. Nuestros abogados
                        actualizan continuamente para mantenerte informado.
                    </Text>
                </View>


            </View>
        </View>
    );
}