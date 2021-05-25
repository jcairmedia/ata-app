import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { NavigationHeader } from "../../../Components/Organisms/NavigationHeader";
import { colors, styles } from "../../../Theme/appTheme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { localImages } from "../../../Assets/assets";
import { CustomEntry } from "../../../Components/Atoms/CustomEntry";
import { Hyperlink } from "../../../Components/Atoms/Hyperlink";
import { CustomButton } from "../../../Components/Atoms/CustomButton";
import {useNavigation} from "@react-navigation/core";

export const ATAFreeConsultScreen = ({ }) =>
{

    const navigation = useNavigation();

    const getFreeConsult = () => {
        navigation.navigate('ConfirmScreen', {type: 'freeConsult'});
    }

    return (
        <View style={{
            ...styles.mainContainer,
        }}>
            <View style={styles.mainContainer}>
                <NavigationHeader title={' Recibe tu primer guía sin costo '} navigation={navigation}/>
            </View>

            <ImageBackground
                source={ localImages.whiteSectionBackground }
                style={{
                ...styles.backgroundContainer,
                flex: 7
            }}>

                <KeyboardAwareScrollView style={{
                    flex: 1,
                    paddingTop: 30,
                }}>

                    <View styles={{
                        ...styles.mainContainer,
                    }}>
                        <Text style={{
                            ...styles.mainTitle,
                            fontSize: 20,
                            textAlign: 'center',
                        }}>
                            ¿Problemas

                            <Text style={{
                                color: colors.primaryColor,
                            }}>
                                {' '} legales? </Text>
                        </Text>
                    </View>

                    <View style={{
                        ...styles.mainContainer,
                        paddingHorizontal: '5%'
                    }}>
                        <Text style={{
                            ...styles.subtitle,
                            marginVertical: 10
                        }}>
                            En <Text style={{ color: colors.primaryColor, fontWeight: 'bold'}}> ATA </Text> {''}estamos para ayudarte.
                        </Text>

                        <Text style={{
                            ...styles.subtitle,
                            marginVertical: 10
                        }}> dejanos tus datos, agendatu llamada y recibe una guia legal gratuita.  </Text>

                        <Text style={{
                            ...styles.subtitle,
                            marginVertical: 10
                        }}>
                            La duración de la guía es de aprox. <Text style={{ color: colors.primaryColor, fontWeight: 'bold'}}> 5 minutos </Text>
                        </Text>
                    </View>


                    <View style={{
                        ...styles.mainContainer,
                        paddingHorizontal: '10%',
                        paddingVertical: '5%',
                    }}>
                        <CustomEntry placeHolder={'Nombre (s)'}/>
                        <CustomEntry placeHolder={'Apellidos (s)'}/>
                        <CustomEntry placeHolder={'Calle'}/>
                        <CustomEntry placeHolder={'Email'}/>
                        <CustomEntry placeHolder={'Teléfono'}/>
                        <CustomEntry placeHolder={'Hora'}/>
                        <CustomEntry placeHolder={'Fecha'}/>

                        <View style={{
                            ...styles.mainContainer,
                            marginVertical: 10
                        }}>
                            <Hyperlink title={'Aviso de Privacidad'} color={colors.primaryColor}/>
                        </View>

                        <View style={{
                            ...styles.mainContainer,
                            marginTop: 10,
                            marginBottom: 50
                        }}>
                            <CustomButton
                                title={'Agenda tu guía gratuita'}
                                style={'secondary'}
                                onClick={ getFreeConsult }/>
                        </View>
                    </View>

                </KeyboardAwareScrollView>
            </ImageBackground>

        </View>
    );
}
