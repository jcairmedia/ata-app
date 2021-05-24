import React from "react";
import { View, ScrollView, ImageBackground, TouchableOpacity, Text } from "react-native";
import { Header } from "../../../Components/Organisms/Header";
import { styles } from "../../../Theme/appTheme";
import { localImages } from "../../../Assets/assets";
import { Card } from "../../../Components/Molecules/Card";
import { CustomCarousel } from "../../../Components/Organisms/CustomCarousel";
import { CustomTitle } from "../../../Components/Atoms/CustomTitle";
import { CustomSubtitle } from "../../../Components/Atoms/CustomSubtitle";
import { CustomCaption } from "../../../Components/Atoms/CustomCaption";


export const ATAWelcomePageScreen = ({ navigation }) =>
{
    return (
        <View style={styles.mainContainer}>
            <Header/>

            <ImageBackground
                source={localImages.homeBackground}
                style={styles.backgroundContainer}>

                <ScrollView style={ styles.mainContainer }>

                    <View
                        style={{
                            marginTop: 10,
                            marginBottom: -30,
                        }}>
                        <CustomTitle text={'Bienvenido'}/>
                    </View>

                    <CustomCarousel />

                    <View
                        style={{
                            marginTop: -20,
                            marginBottom: 20,
                            marginLeft: '5%',
                            marginRight: '5%',
                        }}>

                        <CustomSubtitle text={'Te ofrecemos los mejores servicios y soluciones para tus problemas legales'}/>

                    </View>


                    <View
                        style={{
                        ...styles.secondaryContainer,
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>

                        <TouchableOpacity
                            style={{ width: '50%'}}
                            onPress={() => navigation.navigate('ATAFreeConsultScreen')}>

                            <Card
                                image={localImages.freeConsult}
                                title={'¿Problemas legales?'}
                                subtitle={'Agenda tu guía gratuita'}
                                icon={'headset-outline'}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ width: '50%'}}
                            onPress={() => navigation.navigate('ATAPaymentConsultScreen')}>

                            <Card
                                image={localImages.paymentConsult}
                                title={'Asesorate en tu caso'}
                                subtitle={'Asesorías desde $ 300 MXN *'}
                                icon={'book-outline'}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ width: '50%'}}
                            onPress={() => navigation.navigate('ATAPackageScreen')}>

                            <Card
                                image={localImages.packages}
                                title={'Contrata a los mejores'}
                                subtitle={'Paquetes desde $ 2500 MXN *'}
                                icon={'shield-checkmark-outline'}
                            />

                        </TouchableOpacity>

                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            marginLeft: '5%',
                            marginRight: '5%',
                        }}>

                        <CustomCaption text={'*Todos los precios incluyen IVA y están sujetos a cambios '}/>

                    </View>

                </ScrollView>

            </ImageBackground>


        </View>
    );

}
