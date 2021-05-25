import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {colors, styles} from "../../Theme/appTheme";
import {localImages} from "../../Assets/assets";
import {CustomButton} from "../Atoms/CustomButton";

export const ConsultCard = ({headerImage, title, abstract}) => {

    return (
        <View
            style={{
                ...styles.mainContainer,
                height: 350,
                marginVertical: 10,
                marginHorizontal: 20,
                shadowColor: '#000',
                shadowOpacity: .5,
                shadowRadius: 5,
                elevation: 5,
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                backgroundColor: 'white',
                borderRadius: 5
            }}>

            <Image
                source={{uri: headerImage}}
                style={{
                    flex: 4,
                    width: '100%',
                    borderRadius: 5,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                }}
            />

            <View
                style={{
                    flex: 3,
                    marginTop: 10,
                    marginHorizontal: 10,
                }}>

                <Text style={{ ...styles.mainTitle }}> { title } </Text>
                <Text> {} </Text>
                <Text> {abstract} </Text>
            </View>

            <View style={{
                flex: 1.5,
                justifyContent: 'center',
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.secondary,
                        height: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                        marginBottom: 5,
                        borderRadius: 5
                    }}>
                    <Text style={{
                        color: 'white',
                    }}>
                        Ver más
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}
