import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Text} from "react-native";

export const ProfileNavigator  = () =>
{
    const Stack = createStackNavigator();

    const ProfileScreen = () =>
    {
        return ( <Text> profile screen </Text> );
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="ContactScreen" component={ ProfileScreen } />

        </Stack.Navigator>
    );
}
