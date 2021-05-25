import React from "react";

import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Hyperlink } from "../Atoms/Hyperlink";
import { colors, styles } from "../../Theme/appTheme";
import RNPickerSelect from "react-native-picker-select";

export const PackagesData = ({title, cost, benefits}) =>
{
    const customPickerStyles = StyleSheet.create({
        inputIOS: {
            fontSize: 14,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: colors.secondary,
            borderRadius: 8,
            color: 'white',
            paddingRight: 30, // to ensure the text is never behind the icon
            backgroundColor: colors.secondary
        },
        inputAndroid: {
            fontSize: 14,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: colors.secondary,
            borderRadius: 8,
            color: 'white',
            paddingRight: 30, // to ensure the text is never behind the icon
            backgroundColor: colors.secondary
        },
    });

    return (
        <View style={{
            ...styles.mainContainer,
            paddingTop: 20,
            backgroundColor: 'white',
            borderColor: colors.primaryColor,
            borderWidth: 5,
            borderRadius: 5,
        }}>

            <Text
                style={{
                    ...styles.mainTitle,
                    ...styles.packagesTitle,
                }}>

                { title }
            </Text>

            <Text
                style={{
                    ...styles.mainTitle,
                    color: 'black',
                    textAlign: 'center',
                }}>
                pago mensual fijo de
            </Text>

            <Text
                style={{
                    ...styles.mainTitle,
                    ...styles.packagesTitle,
                }}>
                {cost} MXN*
            </Text>

            <Text
                style={{
                    ...styles.mainTitle,
                    color: 'black',
                    textAlign: 'center',
                    marginTop: 10,
                }}>
                ¿Qué obtienes?
            </Text>

            <View style={{
                ...styles.mainContainer,
                flex: 3,
                paddingVertical: 10
            }}>
                <ScrollView>
                    {
                        benefits && benefits.map((benefit, index) => {
                            return (
                                <Text
                                    key={index}
                                    style={{
                                        ...styles.subtitle,
                                        color: 'darkgray',
                                        textAlign: 'center',
                                        marginTop: 10,
                                        paddingHorizontal: '5%'
                                    }}>
                                    * {benefit}
                                </Text>
                            );
                        })
                    }
                </ScrollView>
            </View>


            <View style={{
                ...styles.mainContainer,
                paddingHorizontal: 20,
                justifyContent: 'center',
            }}>

            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
                useNativeAndroidPickerStyle={false}
                style={{ ...customPickerStyles }}
            />
            </View>


            <View style={{
                ...styles.mainContainer,
                flex: 1.5,
            }}>
                <Hyperlink title={'Términos y condiciones'} color={colors.primaryColor}/>
                <Text
                    style={{
                        ...styles.caption,
                        textAlign: 'center',
                        marginBottom: 30
                    }}>
                    *Precios incluyen IVA, precios sujetos a cambios.
                </Text>
            </View>



        </View>
    );
}
