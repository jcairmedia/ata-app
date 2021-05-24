import React from 'react';
import {RootNavigator} from "./src/Routes/RootNavigator";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (

      <NavigationContainer>
      <RootNavigator />
      </NavigationContainer>
  );
}
