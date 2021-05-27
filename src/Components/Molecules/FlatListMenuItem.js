import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {colors, styles} from "../../Theme/appTheme";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";

export const FlatListMenuItem  = ({ icon, title, navigateTo }) =>
{
    const navigation = useNavigation();

    return (
        <View style={{
            ...styles.mainContainer,
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: colors.secondary,
            borderRadius: 5,
        }}>
            <TouchableOpacity
                style={{
                    ...styles.secondaryContainer,
                    justifyContent: 'center',
                    height: 40,
                }}

                onPress={ () => navigation.navigate( navigateTo ) }
            >

                <View style={{
                    ...styles.mainContainer,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                }}>
                    <Ionicons name={icon} size={20} color={'white'}/>
                </View>

                <View style={{
                    ...styles.mainContainer,
                    flex: 9,
                    justifyContent: 'center',

                }}>
                    <Text
                    style={{
                        ...styles.mainTitle,
                        color: 'white',
                    }}>
                        { title }

                    </Text>
                </View>


                <View style={{
                    ...styles.mainContainer,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                }}>
                    <Ionicons name={ 'arrow-forward' } size={ 20 } color={ 'white' }/>
                </View>

            </TouchableOpacity>
        </View>
    );

}
