import React from 'react'
import { View, ImageBackground, Image, Dimensions, Alert } from "react-native";
import { localImages } from "../../Assets/assets";
import { styles } from "../../Theme/appTheme";
import { CustomTitle } from "../../Components/Atoms/CustomTitle";
import { Ionicons } from "@expo/vector-icons";
import { CustomButton } from "../../Components/Atoms/CustomButton";
import { Hyperlink } from "../../Components/Atoms/Hyperlink";
import { CustomEntry } from "../../Components/Atoms/CustomEntry";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const LoginScreen = ({ navigation }) => {

    let ScreenHeight = Dimensions.get("window").height;

    const getLogin = () => {
         navigation.navigate('MainNavigator');
    }

    const goToregister = () => {
        navigation.navigate('RegisterScreen');
    }

    return (

        <>
            <ImageBackground
                source={localImages.loginBackground}
                style={{
                    ...styles.backgroundContainer
                }}>

                <KeyboardAwareScrollView
                    style={{
                        ...styles.mainContainer,
                    }}>

                    <View
                        style={{
                            ...styles.mainContainer,
                            height: ScreenHeight,
                        }}>

                        <View>
                            <Image
                                source={localImages.loginHeader}
                                style={{
                                    position: 'relative',
                                    top: 0,
                                    width: '100%',
                                    height: 200,
                                    resizeMode: 'stretch'
                                }}/>

                            <Image
                                source={localImages.loginLogo}
                                style={{
                                    position: 'absolute',
                                    top: 40,
                                    height: 80,
                                    resizeMode: 'contain'
                                }}/>

                            <View
                                style={{
                                    position: 'absolute',
                                    top: 130,
                                    left: 0,
                                    right: 0,
                                }}>
                                <CustomTitle
                                    text={'INICIAR SESION'}
                                />
                            </View>

                        </View>

                        <View
                            style={{
                                ...styles.mainContainer,
                                justifyContent: 'space-between',
                            }}>

                            <View
                                style={{
                                    ...styles.mainContainer,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>

                                <Ionicons
                                    name={'person-circle-sharp'}
                                    size={80}
                                    color='white'>
                                </Ionicons>
                            </View>


                            <View
                                style={{
                                    ...styles.mainContainer,
                                    flex: 1.5,
                                    justifyContent: 'center',
                                    paddingHorizontal: '8%',
                                }}>

                                <CustomEntry placeHolder={ 'Correo electrónico' }/>
                                <CustomEntry placeHolder={'Contraseña'} type={'password'} password={true}/>

                            </View>


                            <View
                                style={{
                                    ...styles.mainContainer,
                                    flex: .5,
                                    alignItems: 'center',
                                }}>
                                <Hyperlink title={'Aviso de privacidad'}/>
                            </View>

                            <View
                                style={{
                                    ...styles.mainContainer,
                                    paddingHorizontal: '10%',
                                }}>

                                <CustomButton title={'Entrar'} onClick={ getLogin }/>

                            </View>

                            <View
                                style={{
                                    ...styles.mainContainer,
                                }}>
                                <Hyperlink
                                    title={'¿No tienes cuenta?'}
                                    boldText={' Registrate'}
                                    onPress={ goToregister }
                                />
                            </View>
                        </View>
                    </View>

                </KeyboardAwareScrollView>

            </ImageBackground>
        </>
    );
}