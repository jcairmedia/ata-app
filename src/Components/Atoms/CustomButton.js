import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from "../../Theme/appTheme";

export const CustomButton = ({ title, onClick, style }) =>
{
    switch (style)
    {
        case 'primary':
            return(
                <View style={{
                    ...styles.mainContainer,
                    justifyContent:'center',
                }}>

                    <TouchableOpacity
                        style={ styles.whiteButton }
                        onPress={ onClick }>
                        <Text style={ styles.whiteButtonText }> { title } </Text>
                    </TouchableOpacity>

                </View>
            );

        case 'secondary':
            return(
                <View style={{
                    ...styles.mainContainer,
                    justifyContent:'center',
                }}>

                    <TouchableOpacity
                        style={ styles.greenButton }
                        onPress={ onClick }>
                        <Text style={ styles.greenButtonText }> { title } </Text>
                    </TouchableOpacity>

                </View>
            );

        default :
            return(
                <View style={{
                    ...styles.mainContainer,
                    justifyContent:'center',
                }}>

                    <TouchableOpacity
                        style={ styles.whiteButton }
                        onPress={ onClick }>
                        <Text style={ styles.whiteButtonText }> { title } </Text>
                    </TouchableOpacity>

                </View>
            );
    }

}