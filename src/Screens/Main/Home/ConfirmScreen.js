import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { colors, styles } from "../../../Theme/appTheme";
import { NavigationHeader } from "../../../Components/Organisms/NavigationHeader";
import { localImages } from "../../../Assets/assets";
import { Ionicons } from "@expo/vector-icons";

export const ConfirmScreen  = ({ route, navigation }) =>
{
    const { type } = route.params;
    const success = {
        freeConsult: { header: ' Recibe tu primer guía sin costo ', title: '¡Tu guía ha sido generada con ', titleBold: 'Exito!', image: localImages.freeConsultSuccess },
        paymentConsult: {header:'Agenda tu asesoría',  title: '¡Pago ', titleBold: 'Exitoso!', image: localImages.paymentConsultSuccess },
        package: { title: '', titleBold: '', image: localImages.whiteSectionBackground },
    }
    return(
        <View style={{
            ...styles.mainContainer,
        }}>
            <View style={styles.mainContainer}>
                <NavigationHeader title={ success[type].header } navigation={navigation}/>
            </View>

            <ImageBackground
                source={ localImages.whiteSectionBackground }
                style={{
                    ...styles.backgroundContainer,
                    flex: 7,
                }}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <View style={{
                        ...styles.mainContainer,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Ionicons
                            name={ 'checkmark-circle-outline' }
                            size={ 50 }
                            color={ colors.primaryColor }>
                        </Ionicons>
                    </View>

                    <View styles={{
                        ...styles.mainContainer,
                    }}>
                        <Text style={{
                            ...styles.mainTitle,
                            fontSize: 20,
                            textAlign: 'center',
                        }}>

                            { success[type].title }

                            <Text style={{
                                color: colors.primaryColor,
                            }}>
                                { success[type].titleBold }
                            </Text>
                        </Text>
                    </View>

                </View>

                <View
                    style={{
                        ...styles.mainContainer,
                        flex: 4,
                    }}>

                    <View
                        style={{
                        ...styles.mainContainer,
                            flex: 4,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                      <Image
                          source={ success[type].image }
                          style={{
                              maxHeight: '70%',
                              maxWidth: '70%',
                              borderTopRightRadius: 20,
                              borderTopLeftRadius: 20,
                              borderBottomRightRadius: 20,
                              borderBottomLeftRadius: 20,
                              resizeMode: 'cover',
                          }}/>
                    </View>

                    <View
                        style={{
                            ...styles.mainContainer,
                            paddingHorizontal: '5%',
                        }}>

                        <Text  style={{
                            ...styles.subtitle,
                            marginBottom: 10}}>
                            gracias por confiar en <Text style={{ color: colors.primaryColor, fontWeight: 'bold'}}> ATA </Text>
                        </Text>


                        <Text style={{
                            ...styles.subtitle,
                            marginBottom: 10}}>
                            revisa el correo electrónico que nos proporcionaste para recibir detalles adicionales
                        </Text>
                    </View>

                </View>

            </ImageBackground>

        </View>
    );
}
