import React from 'react'
import {View, Image, Dimensions} from "react-native";
import { NavigationHeader } from "../../Components/Organisms/NavigationHeader";
import {colors, styles} from "../../Theme/appTheme";
import { localImages } from "../../Assets/assets";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {CustomEntry} from "../../Components/Atoms/CustomEntry";
import {CustomTitle} from "../../Components/Atoms/CustomTitle";
import {Hyperlink} from "../../Components/Atoms/Hyperlink";
import {CustomButton} from "../../Components/Atoms/CustomButton";

export const RegisterScreen = ({ navigation }) =>
{
    return(
        <View style={{
            ...styles.mainContainer,
            backgroundColor: 'white'
        }}>

            <View style={ styles.mainContainer }>
                <NavigationHeader title={' Registro '} navigation={ navigation }/>
            </View>

            <View style={{
                flex: 7,
            }}>


                <KeyboardAwareScrollView style={{
                    flex: 1,
                }}>
                    <View
                        style={{
                            ...styles.mainContainer,
                        }}>
                        <Image
                            source={localImages.registerHero}
                            style={{
                                width: '100%',
                                height: 150
                            }}
                        />
                    </View>


                    <View style={{
                        ...styles.mainContainer,
                        paddingHorizontal: '10%',
                        paddingVertical: '5%',
                    }}>

                        <CustomTitle text={'Registro' }/>
                        <CustomEntry placeHolder={'Correo' }/>
                        <CustomEntry placeHolder={'Nombre (s)' }/>
                        <CustomEntry placeHolder={'Apellidos (s)' }/>
                        <CustomEntry placeHolder={'Calle' }/>
                        <CustomEntry placeHolder={'Número interior '}/>
                        <CustomEntry placeHolder={'Número exterior '}/>
                        <CustomEntry placeHolder={'Colonia '}/>
                        <CustomEntry placeHolder={'C.P'} />
                        <CustomEntry placeHolder={'Delegación / Municipio '} />
                        <CustomEntry placeHolder={'Estado '} />
                        <CustomEntry placeHolder={' Contraseña '} type={'password'} password={true}/>
                        <CustomEntry placeHolder={' Confirmar contraseña '} type={'password'} password={true} />

                        <View style={{
                            ...styles.mainContainer,
                            marginVertical: 10
                        }}>
                        <Hyperlink title={ 'Aviso de Privacidad' }  color={ colors.primaryColor }/>
                        </View>

                        <View style={{
                            ...styles.mainContainer,
                            marginVertical: 10
                        }}>
                        <CustomButton title={'Registrarme'} style={'secondary'}/>
                        </View>
                    </View>

                </KeyboardAwareScrollView>

            </View>
        </View>
    );
}