import React from "react";
import {View, Text} from "react-native";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationHeader} from "../../Components/Organisms/NavigationHeader";
import {colors, styles} from "../../Theme/appTheme";

export const ProfilePackagesNavigator = () => {

    const tab1 = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        );
    }

    const tab2 = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        );
    }
    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            <NavigationHeader title={"Documentos"}> </NavigationHeader>
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {fontSize: 12},
                style: {
                    backgroundColor: 'white',
                    activeTintColor: colors.primaryColor,
                }
            }}>

            <Tab.Screen name="Mis documentos" component={tab1}/>
            <Tab.Screen name="Documentos ATA" component={tab2}/>

        </Tab.Navigator>
        </>
    );
}
