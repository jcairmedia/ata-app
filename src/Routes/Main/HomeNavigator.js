import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {ATAFreeConsultScreen} from "../../Screens/Main/Home/ATAFreeConsultScreen";
import {ATAWelcomePageScreen} from "../../Screens/Main/Home/ATAWelcomePageScreen";
import {ATAPaymentConsultScreen} from "../../Screens/Main/Home/ATAPaymentConsultScreen";
import {ATAPackageScreen} from "../../Screens/Main/Home/ATAPackageScreen";
import {ConfirmScreen} from "../../Screens/Main/Home/ConfirmScreen";



export const HomeNavigator = () =>
{
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="ATAWelcomePageScreen" component={ ATAWelcomePageScreen } />
            <Stack.Screen name="ATAFreeConsultScreen" component={ ATAFreeConsultScreen } />
            <Stack.Screen name="ATAPaymentConsultScreen" component={ ATAPaymentConsultScreen } />
            <Stack.Screen name="ATAPackageScreen" component={ ATAPackageScreen } />
            <Stack.Screen name="ConfirmScreen" component={ ConfirmScreen } />
        </Stack.Navigator>
    );

}