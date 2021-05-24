import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Text} from "react-native";

export const ContactNavigator  = () =>
{
    const Stack = createStackNavigator();

    const ContactScreen = () =>
    {
        return ( <Text> Contact screen </Text> );
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="ContactScreen" component={ ContactScreen } />
        </Stack.Navigator>
    );
}
