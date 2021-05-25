import React, { useState } from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import { PackagesData } from "../../../Components/Organisms/PackagesData";
import { styles } from "../../../Theme/appTheme";
import { NavigationHeader } from "../../../Components/Organisms/NavigationHeader";
import { localImages } from "../../../Assets/assets";

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { packagesData } from "../../../Data/PackagesData";
import {CustomButton} from "../../../Components/Atoms/CustomButton";
import {useNavigation} from "@react-navigation/core";


export const ATAPackageScreen = ({ }) =>
{
    const navigation = useNavigation();
    const { width: windowWidth } = Dimensions.get('window');

    const [selectedPackage, setSelectedPackage] = useState(packagesData[0].name);


    return (
        <View style={{
            ...styles.mainContainer,
        }}>
            <View style={styles.mainContainer}>
                <NavigationHeader title={' Nuestros Paquetes '} navigation={navigation}/>
            </View>

            <ImageBackground
                source={localImages.packagesSectionBackground}
                style={{
                    ...styles.backgroundContainer,
                    flex: 7
                }}>

                <View
                    style={{
                        ...styles.mainContainer,
                        flex: 6,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 20,
                        paddingHorizontal: 10
                    }}>

                    <Carousel
                        data={ packagesData }
                        useScrollView={ true }

                        renderItem={({item}) =>
                        {
                            return (
                            <PackagesData
                                title={ item.name }
                                benefits={ item.benefits }
                                cost={ item.cost }
                            />);
                        }
                        }

                        onSnapToItem = {(item) => { setSelectedPackage(packagesData[item].name ) }

                        }

                        sliderWidth={windowWidth}
                        itemWidth={windowWidth - 60}
                    />
                </View>

                <View style={{
                    ...styles.mainContainer,
                    paddingHorizontal: 35,
                    paddingVertical: 10,
                }}>
                    <CustomButton  title={ "Comprar " +  selectedPackage } style={ 'secondary' }/>
                </View>


            </ImageBackground>


        </View>
    );


}
