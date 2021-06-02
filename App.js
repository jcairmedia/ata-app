import React from 'react';
import {RootNavigator} from "./src/Routes/RootNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {store} from "./src/Core/Store";

export default function App()
{
    return (

        <Provider store={store}>
            <NavigationContainer>
                <RootNavigator/>
            </NavigationContainer>
        </Provider>
    );
}
