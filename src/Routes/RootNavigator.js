import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {AuthNavigator} from "./Auth/AuthNavigator";
import {MainNavigator} from "./Main/MainNavigator";

export const RootNavigator = () =>
{
    const Stack = createStackNavigator();

   return (
           <Stack.Navigator
               screenOptions={{
               headerShown: false
           }}>
               <Stack.Screen name="MainNavigator" component={MainNavigator} />
               <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
           </Stack.Navigator>
   );

}

