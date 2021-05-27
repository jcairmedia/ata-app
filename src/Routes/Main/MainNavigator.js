import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

import {HomeNavigator} from "./HomeNavigator";
import {ConsultNavigator} from "./ConsultNavigator";
import {ProfileNavigator} from "./ProfileNavigator";
import { Ionicons } from '@expo/vector-icons';
import {colors} from "../../Theme/appTheme";

export const MainNavigator = () =>
{

    const materialTabs = createMaterialBottomTabNavigator();

        return (
            <materialTabs.Navigator
                sceneAnimationEnabled={ true }
                barStyle={{
                    backgroundColor: colors.primaryColor,
                }}
                screenOptions={ ({ route }) => ({
                    tabBarIcon: ({ color, focused }) => {

                        let iconName = '';

                        switch( route.name )
                        {
                            case 'HomeNavigator':
                                iconName =
                                    focused
                                    ? 'home-sharp'
                                    : 'home-outline';
                                break;

                            case 'ConsultNavigator':
                                iconName =
                                    focused
                                    ? 'book'
                                    : 'book-outline';
                                break;

                            case 'ProfileNavigator':
                                iconName =
                                    focused
                                    ? 'person'
                                    : 'person-outline';
                                break;
                        }

                        return <Ionicons name={ iconName } size={ 20 } color={ color } />;
                    }
                })}
            >
                <materialTabs.Screen name="HomeNavigator" options={{title: 'Inicio'}} component={ HomeNavigator }/>
                <materialTabs.Screen name="ConsultNavigator" options={{title: 'Consulta'}} component={ ConsultNavigator }/>
                <materialTabs.Screen name="ProfileNavigator" options={{title: 'perfil'}} component={ ProfileNavigator }/>
            </materialTabs.Navigator>
        );



    /***
    const Tab = createBottomTabNavigator();
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'HomeNavigator')
                        {
                            iconName = focused
                                ? 'home-sharp'
                                : 'home-outline';
                        }

                        else if (route.name === 'ConsultNavigator')
                        {
                            iconName = focused
                                ? 'ios-mail-sharp'
                                : 'ios-mail-outline';
                        }

                        else if (route.name === 'ProfileNavigator')
                        {
                            iconName = focused
                                ? 'person'
                                : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: colors.textOnPrimary,
                    inactiveTintColor: colors.textOnPrimary,
                    style: {
                        backgroundColor: colors.primaryColor,
                    }
                }}
            >
                <Tab.Screen name="HomeNavigator" options={{title: 'Inicio'}} component={HomeNavigator}/>
                <Tab.Screen name="ConsultNavigator" options={{title: 'contacto'}} component={ConsultNavigator}/>
                <Tab.Screen name="ProfileNavigator" options={{title: 'perfil'}} component={ProfileNavigator}/>
            </Tab.Navigator>
        );
     **/

}