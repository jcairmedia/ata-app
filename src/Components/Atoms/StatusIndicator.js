import React from "react";
import { Text, View } from "react-native";
import {colors, styles} from "../../Theme/appTheme";
import {CustomButton} from "./CustomButton";

export const StatusIndicator = ({ text }) =>
{
    return (
        <View
            style={{
                ...styles.mainContainer,
                marginVertical: 20,
                justifyContent: 'space-between',
            }}>

           <View
               style={{
                   ...styles.secondaryContainer,
                   maxHeight: 50,
                   justifyContent: 'center',
                   alignItems: 'center',
                   borderWidth: 2,
                   borderRadius: 5,
                   borderColor: colors.primaryColor

           }}>

               <View>
                   <Text> Status del caso: </Text>
               </View>

               <View>
                   <Text
                       style={{
                           ...styles.mainTitle,
                           color: colors.primaryColor,
                       }}>
                       Abierto
                   </Text>
               </View>

           </View>

        </View>
    );
}