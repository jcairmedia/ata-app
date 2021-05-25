import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {LoginScreen} from "../../Screens/Auth/LoginScreen";
import {RegisterScreen} from "../../Screens/Auth/RegisterScreen";
import {PrivacyScreen} from "../../Screens/Auth/PrivacyScreen";


export const AuthNavigator = ({}) =>
{
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>

            <Stack.Screen name="LoginScreen" component={ LoginScreen } />
            <Stack.Screen name="RegisterScreen" component={ RegisterScreen } />
            <Stack.Screen name="PrivacyScreen" component={ PrivacyScreen } />
        </Stack.Navigator>
    );
}