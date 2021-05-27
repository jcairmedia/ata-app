import React, { useState } from "react"
import {ImageBackground, StyleSheet, Text, View, FlatList, Image} from "react-native";
import {colors, styles} from "../../../Theme/appTheme";
import {localImages} from "../../../Assets/assets";
import {Header} from "../../../Components/Organisms/Header";
import {CustomTitle} from "../../../Components/Atoms/CustomTitle";
import RNPickerSelect from "react-native-picker-select";

import {CustomSubtitle} from "../../../Components/Atoms/CustomSubtitle";

import { blogs } from "../../../mocks/BlogNotesMock";
import {Ionicons} from "@expo/vector-icons";
import {ConsultCard} from "../../../Components/Molecules/ConsultCard";

export const ConsultScreen = ({ navigation   }) =>
{
    const customPickerStyles = StyleSheet.create({
        inputIOS: {
            height: 35,
            fontSize: 15,
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
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: colors.secondary,
            borderRadius: 8,
            color: 'white',
            paddingRight: 30, // to ensure the text is never behind the icon
            backgroundColor: colors.secondary
        },
    });
    const [category, setCategory] = useState();


    const headerOfList = () => {
        return (
            <>
                <View style={{
                    ...styles.mainContainer,
                    marginVertical: 20,
                    marginHorizontal: 20
                }}>
                    <CustomTitle text={' Consulta tus derechos '}/>
                    <Text> {} </Text>
                    <CustomSubtitle text={'En ATA nos preocupamos por ti.'}/>
                    <CustomSubtitle text={' Consulta y resuelve tus dudas sobre los temas legales más comunes.'}/>

                </View>
                <View style={{
                    ...styles.mainContainer,
                    padding: 20,
                    justifyContent: 'center',
                }}>

                    <RNPickerSelect
                        onValueChange={
                            async (value) => {
                            await setCategory(value)
                            }
                        }
                        placeholder={{
                            label: 'Elige una categoría...',
                            value: null,
                        }}

                        items={[
                            {label: 'Categoría 1', value: 'Categoría 1'},
                            {label: 'Categoría 2', value: 'Categoría 2'},
                            {label: 'Categoría 3', value: 'Categoría 3'},
                        ]}

                        value={ category }


                        Icon={() => {
                            return <Ionicons name="caret-down" size={24} color="white" />;
                        }}

                        useNativeAndroidPickerStyle={false}
                        style={{
                            ...customPickerStyles,
                            placeholder: {
                                color: 'white',
                                fontWeight: 'bold',
                            },
                            iconContainer: {
                                top: 5,
                                right: 10,
                            },
                        }}
                    />

                    <View
                        style={{
                            ...styles.mainContainer,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 40,
                            paddingBottom: 20
                        }}
                    >
                        <Text style={{
                            ...styles.mainTitle,
                        }}>
                            { category }
                        </Text>
                    </View>

                </View>
            </>
        );
    }

    const renderItems = (item) => {

        return(

          <ConsultCard
              title={ item.title }
              abstract={ item.abstract }
              headerImage={ item.coverImageUrl }
              item={ item }
          />

        );
    }


    return (
        <View style={styles.mainContainer}>

            <Header/>

            <ImageBackground
                source={localImages.whiteSectionBackground}
                style={{
                    ...styles.backgroundContainer,
                }}>

                <FlatList
                    data={ blogs }
                    keyExtractor={ (item) => item._id }
                    renderItem={ ({item}) => renderItems(item) }
                    ListHeaderComponent={ headerOfList }
                    onEndreachedThreshold={ 0.5 }
                >


                </FlatList>

            </ImageBackground>

        </View>
    );
}