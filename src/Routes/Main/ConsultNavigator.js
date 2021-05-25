import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Text} from "react-native";
import {ConsultScreen} from "../../Screens/Main/Consult/ConsultScreen";
import {ConsultEntry} from "../../Screens/Main/Consult/ConsultEntry";

export const ConsultNavigator  = () =>
{
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="ConsultScreen" component={ ConsultScreen } />
            <Stack.Screen name="ConsultEntry" component={ ConsultEntry } />
        </Stack.Navigator>
    );
}
