import React from "react";
import {View, Text, Image, FlatList} from "react-native";

import {Header} from "../../../Components/Organisms/Header";
import {styles} from "../../../Theme/appTheme";
import { profileData } from "../../../mocks/ProfileDataMock";
import {FlatListMenuItem} from "../../../Components/Molecules/FlatListMenuItem";

export const ProfileScreen = () =>
{
    const menuItems = [
        {
            id: '123455',
            icon: 'md-person',
            title: 'Mis datos',
            navigateTo: 'ProfileDataScreen',
        },
        {
            id: '123456',
            icon: 'grid',
            title: 'Mis Paquetes',
            navigateTo: 'PackagesScreen',
        },
        {
            id: '123457',
            icon: 'card',
            title: 'Datos de pago',
            navigateTo: 'PaymentScreen',
        },
        {
            id: '123458',
            icon: 'log-out',
            title: 'Cerrar sesión',
            navigateTo: '',
        },
    ]

    return(
        <View
            style={{
            ...styles.mainContainer,
            }}>

            <Header />

            <View
                style={{
                    ...styles.mainContainer,
                }}>

                <View
                    style={{
                    ...styles.secondaryContainer,
                        margin: 20,
                        maxHeight: '20%'
                    }}>

                   <View
                       style={{
                           ...styles.mainContainer,
                           flex: 1.5,
                           justifyContent: 'center',
                           alignItems: 'center',
                       }}
                   >
                       <Image
                           source={{uri: profileData.profilePhoto}}
                           style={{
                               width: 85,
                               height: 85,
                               borderRadius: 150
                           }}
                       />
                   </View>

                    <View style={{
                        ...styles.mainContainer,
                        flex: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            ...styles.mainTitle
                        }}>
                            { profileData.name }
                        </Text>

                        <Text>
                            { profileData.email }
                        </Text>
                    </View>
                </View>
                <View>

                    <FlatList
                        data={ menuItems }
                        renderItem={ ({ item }) => {
                            return(
                            <FlatListMenuItem
                                icon={ item.icon }
                                title={ item.title }
                                navigateTo={ item.navigateTo }
                            />);
                        }}

                        keyExtractor={ ( item ) => item.id }
                    />

                </View>

            </View>

        </View>
    );
}
