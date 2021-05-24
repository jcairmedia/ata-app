import React from "react";
import {View, Text, ImageBackground, Image} from "react-native";
import {colors, styles} from "../../../Theme/appTheme";
import {NavigationHeader} from "../../../Components/Organisms/NavigationHeader";
import {localImages} from "../../../Assets/assets";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {CustomEntry} from "../../../Components/Atoms/CustomEntry";
import {Hyperlink} from "../../../Components/Atoms/Hyperlink";
import {CustomButton} from "../../../Components/Atoms/CustomButton";

export const ATAPaymentConsultScreen  = ({ navigation }) =>
{
    const getPaymentConsult = () => {
        navigation.navigate('ConfirmScreen', {type: 'paymentConsult'});
    }

    return (
        <View style={{
            ...styles.mainContainer,
        }}>
            <View style={styles.mainContainer}>
                <NavigationHeader title={' Agenda tu asesoría '} navigation={navigation}/>
            </View>

            <ImageBackground
                source={ localImages.whiteSectionBackground }
                style={{
                    ...styles.backgroundContainer,
                    flex: 7
                }}>

                <KeyboardAwareScrollView style={{
                    flex: 1,
                }}>

                    <View styles={{
                        ...styles.mainContainer,
                    }}>

                        <Image
                            source={ localImages.loginLogo }
                            style={{
                                resizeMode: 'center',
                                marginTop: -20,
                                marginBottom: -20,
                            }}
                        />

                        <Text style={{
                            ...styles.mainTitle,
                            fontSize: 20,
                            textAlign: 'center',
                            textTransform:'uppercase'

                        }}>
                            Asesoría a solo

                            <Text style={{
                                color: colors.primaryColor,
                            }}>
                                {' '} $300 MXN </Text>
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
                            Agenda y paga tu asesoría con duración de  <Text style={{ color: colors.primaryColor, fontWeight: 'bold'}}> 45 minutos, </Text> {''}
                            con uno de nuestros abogados, en un horario de lunes a viernes de <Text style={{ color: colors.primaryColor, fontWeight: 'bold'}}> 9 a 18 hrs </Text>
                        </Text>

                    </View>


                    <View style={{
                        ...styles.mainContainer,
                        paddingHorizontal: '10%',
                        paddingVertical: '5%',
                    }}>
                        <CustomEntry placeHolder={'Nombre (s)'}/>
                        <CustomEntry placeHolder={'Apellidos (s)'}/>
                        <CustomEntry placeHolder={'Email'}/>
                        <CustomEntry placeHolder={'Teléfono'}/>
                        <CustomEntry placeHolder={'Quiero una vídeo llamada'}/>
                        <CustomEntry placeHolder={'Hora'}/>
                        <CustomEntry placeHolder={'Fecha'}/>
                        <CustomEntry placeHolder={'Entidad federativa'}/>

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
                                title={'Continuar'}
                                style={'secondary'}
                                onClick={ getPaymentConsult }/>
                        </View>
                    </View>

                </KeyboardAwareScrollView>
            </ImageBackground>

        </View>
    );
}
