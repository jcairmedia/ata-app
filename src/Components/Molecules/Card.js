import React from "react";
import { View, Image, Text } from "react-native";
import {colors, iconSize, styles} from "../../Theme/appTheme";
import { localImages } from "../../Assets/assets";
import {Ionicons} from "@expo/vector-icons";

export const Card  = ({ image, title, subtitle, icon }) => {

    return (
        <View
            style={{
                ...styles.mainContainer,
                borderRadius: 5,
                backgroundColor: colors.primaryColor,
                height: 150,
                margin: 10,
                shadowColor: '#000',
                shadowOpacity: .5,
                shadowRadius: 5,
                elevation: 5,
                shadowOffset: {
                    width: 2,
                    height: 2
                }
            }}>

            <Image
                source={ image }
                style={{
                    flex: 4,
                    width: null,
                    height: null,
                    resizeMode: 'cover',
                    borderRadius: 5
                }}
            />

            <View style={{
                ...styles.secondaryContainer,
                flex: 2,
            }}>

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    <Ionicons
                        name={icon}
                        size={ iconSize.card }
                        color={'white'}
                    />
                </View>

                <View style={{
                    flex: 4,
                    justifyContent: 'center',
                }}>
                    <Text style={ styles.cardTitle }>
                        { title }
                    </Text>

                    <Text style={ styles.cardSubtitle }>
                        { subtitle }
                    </Text>
                </View>
            </View>

        </View>
    );

}
