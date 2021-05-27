import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { ProfileScreen } from "../../Screens/Main/Profile/ProfileScreen";
import {ProfileDataScreen} from "../../Screens/Main/Profile/ProfileDataScreen";
import {PaymentScreen} from "../../Screens/Main/Profile/PaymentScreen";
import {PlansScreen} from "../../Screens/Main/Profile/PlansScreen";

export const ProfileNavigator  = () =>
{
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="ProfileScreen" component={ ProfileScreen } />
            <Stack.Screen name="ProfileDataScreen" component={ ProfileDataScreen } />
            <Stack.Screen name="PlansScreen" component={ PlansScreen } />
            <Stack.Screen name="PaymentScreen" component={ PaymentScreen } />

        </Stack.Navigator>
    );
}
