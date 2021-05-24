import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Theme/appTheme";
import { localImages } from "../../Assets/assets";
import { Ionicons } from "@expo/vector-icons";

export const NavigationHeader  = ({ title, navigation }) => {

    return (
        <View
            style={{
                ...styles.mainContainer,
                maxHeight: 100
            }}>

            <ImageBackground
                source={ localImages.backgroundHeader }
                style={{
                    ...styles.backgroundContainer,
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                <View style={{
                    ...styles.secondaryContainer,
                    justifyContent: 'center',
                    paddingTop: '5%'
                }}>

                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack() }>
                            <Ionicons name='chevron-back-outline' size={50} color='white'/>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            ...styles.mainTitle,
                            color: 'white',
                            textTransform:'uppercase'
                        }}>
                            { title }
                        </Text>
                    </View>

                    <View style={{ flex: 1 }} />


                </View>
            </ImageBackground>
        </View>
    );

}
