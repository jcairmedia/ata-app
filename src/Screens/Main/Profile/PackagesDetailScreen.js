import React, {useState} from "react"
import {ImageBackground, StyleSheet, Text, View, FlatList, Image, ScrollView} from "react-native";
import {colors, styles} from "../../../Theme/appTheme";
import {localImages} from "../../../Assets/assets";
import {NavigationHeader} from "../../../Components/Organisms/NavigationHeader";
import {StatusIndicator} from "../../../Components/Atoms/StatusIndicator";
import {CustomButton} from "../../../Components/Atoms/CustomButton";
import {useNavigation} from "@react-navigation/core";


export const PackagesDetailScreen = ({route}) =>
{
    const item = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>

            <NavigationHeader title={"Detalles del paquete"}/>

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

                            {item.title}
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
                    width: '80%',
                    paddingVertical: 20,
                }}>

                    <Text
                        style={{
                            ...styles.mainTitle,
                            textAlign: 'center',
                        }}>
                        {item.title}
                    </Text>

                    <View style={{
                        ...styles.mainContainer,
                        flex: 1
                    }}>
                    <StatusIndicator> </StatusIndicator>
                    </View>
                </View>

                <View style={{
                    ...styles.mainContainer
                }}>

                </View>

                <View style={{
                    ...styles.mainContainer,
                    flex: 2,
                    paddingVertical: 15,
                    width:'80%',
                }}>

                    <CustomButton title={'Historial del caso'} style={'secondary'} onClick={() => navigation.navigate('PackagesHistoryScreen')}> </CustomButton>
                    <CustomButton title={'Documentos'} style={'secondary'} onClick={() => navigation.navigate('ProfilePackagesNavigator')}> </CustomButton>
                    <CustomButton title={'Ver contrato'} style={'secondary'} onClick={() => {}}> </CustomButton>
                </View>
            </View>


        </View>
    );
}