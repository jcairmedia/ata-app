import React from "react";
import {View, Text, Image, FlatList, ScrollView} from "react-native";

import {styles} from "../../../Theme/appTheme";
import { profileData } from "../../../mocks/ProfileDataMock";
import {FlatListMenuItem} from "../../../Components/Molecules/FlatListMenuItem";
import {NavigationHeader} from "../../../Components/Organisms/NavigationHeader";
import {FlatListProfileDataItem} from "../../../Components/Molecules/FlatListProfileDataItem";
import {ListHeader} from "../../../Components/Atoms/ListHeader";
import { packages } from "../../../mocks/PackagesData"
import {FlatListPackageItem} from "../../../Components/Molecules/FlatListPackageItem";

export const PackagesScreen = () =>
{
    return(
        <View style={{
            ...styles.mainContainer,
        }}>
            <NavigationHeader title={'Mis Paquetes'}/>

            <View
                style={{
                ...styles.mainContainer,
            }}>
                <FlatList
                    style={{
                        marginVertical: 20,
                        marginHorizontal: 10

                    }}
                    data={ packages }
                    renderItem={({item}) => {
                        return (
                            <FlatListPackageItem
                                title={ item.paquete }
                                service={ item.servicio }
                                data={ item.created_at }
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id.toString() }

                    ListHeaderComponent={() => <ListHeader title={ 'Paquetes contratados' }/> } />
            </View>

        </View>
    );
}