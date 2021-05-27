import React from "react";
import {View, FlatList, ScrollView} from "react-native";

import {styles} from "../../../Theme/appTheme";
import { profileData } from "../../../mocks/ProfileDataMock";
import {NavigationHeader} from "../../../Components/Organisms/NavigationHeader";
import {FlatListProfileDataItem} from "../../../Components/Molecules/FlatListProfileDataItem";
import {ListHeader} from "../../../Components/Atoms/ListHeader";
import {CustomButton} from "../../../Components/Atoms/CustomButton";

export const ProfileDataScreen = () =>
{
    const profileDataPerson = [
        {
            title: 'Nombre',
            data:  profileData.name,
        },
        {
            title: 'Fecha de nacimiento',
            data:  profileData.dateOfBirth,
        },

        {
            title: 'CURP',
            data: profileData.curp,
        }];

    const profileDataAddress = [
        {
            title: 'Calle',
            data:  profileData.calle,
        },

        {
            title: 'Número Exterior',
            data:  profileData.numeroExterior,
        },

        {
            title: 'Número Interior',
            data:  profileData.numeroInterior,
        },

        {
            title: 'Colonia',
            data:  profileData.colonia,
        },

        {
            title: 'CP',
            data:  profileData.cp,
        },

        {
            title: 'Delegación',
            data:  profileData.delegacion,
        },

        {
            title: 'Estado',
            data:  profileData.estado,
        }];

    const profileDataContact = [
        {
            title: 'Télefono Celular',
            data: profileData.cellPhone
        },

        {
            title: 'Télefono Particular',
            data: profileData.particularPhone,
        },

        {
            title: 'Télefono Opcional',
            data: profileData.optionalPhone,
        },

        {
            title: 'Correo',
            data: profileData.email,
        }];


    return (
        <View style={{
            ...styles.mainContainer,
        }}>

            <NavigationHeader title={ 'Mis datos' }/>

            <ScrollView style={{
                ...styles.mainContainer,
                margin: 20
            }}>
                <FlatList
                    data={ profileDataPerson }
                    renderItem={ ({ item }) => <FlatListProfileDataItem title={ item.title } data={ item.data } />  }
                    keyExtractor={(item) => item.title}

                    ListHeaderComponent={() => <ListHeader title={ 'Datos personales' }/>}
                />

                <FlatList
                    style={{
                        marginVertical: 20
                    }}
                    data={ profileDataAddress }
                    renderItem={ ({ item }) => <FlatListProfileDataItem title={ item.title } data={ item.data } />  }
                    keyExtractor={(item) => item.title}

                    ListHeaderComponent={() => <ListHeader title={ 'Mi dirección' }/>}
                />


                <FlatList
                    style={{
                        marginVertical: 20
                    }}
                    data={ profileDataContact }
                    renderItem={ ({ item }) => <FlatListProfileDataItem title={ item.title } data={ item.data } />  }
                    keyExtractor={(item) => item.title}

                    ListHeaderComponent={() => <ListHeader title={ 'Contacto' }/>}
                />

                <CustomButton title={' Editar datos '} onClick={ () => console.log('edit profile') } style={'secondary'} />
            </ScrollView>

        </View>
    );
}