import React from 'react';
import {View, TextInput } from 'react-native';
import {colors, styles} from "../../Theme/appTheme";

export const CustomEntry = ({ placeHolder, type = 'none', password=false}) =>
{
    return(

        <View
            style={{
                ...styles.mainContainer,
                justifyContent:'center',
                marginVertical: 10
            }}>

            <TextInput
                style={{
                    height: 40,
                    paddingLeft: 10,
                    backgroundColor: 'white',
                    borderColor: colors.primaryColor,
                    borderWidth: 1,
                    borderRadius: 5,
                }}
                placeholder={ placeHolder }
                textContentType={ type }
                secureTextEntry={password}
            />
        </View>

    );
}