import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Text} from "react-native";
import {ConsultScreen} from "../../Screens/Main/Consult/ConsultScreen";

export const ConsultNavigator  = () =>
{
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="ContactScreen" component={ ConsultScreen } />
        </Stack.Navigator>
    );
}
