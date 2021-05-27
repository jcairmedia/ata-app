import React from "react";
import {View, Text, Image, FlatList} from "react-native";

import {styles} from "../../../Theme/appTheme";
import { profileData } from "../../../mocks/ProfileDataMock";
import {FlatListMenuItem} from "../../../Components/Molecules/FlatListMenuItem";
import {NavigationHeader} from "../../../Components/Organisms/NavigationHeader";

export const PlansScreen = () =>
{
    return(
        <NavigationHeader title={'Mis planes'}/>
    );
}