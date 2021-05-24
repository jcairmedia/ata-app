import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { styles } from "../../Theme/appTheme";
import { localImages } from "../../Assets/assets";

export const Header  = () => {

    return (
        <View
            style={{
            ...styles.mainContainer,
            maxHeight: 100
        }}>
            <ImageBackground
                source={ localImages.backgroundHeader }
                style={{
                    ...styles.backgroundContainer,
                    flexDirection:'row',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
                }}>

                <Image
                    source={ localImages.logoHeader }
                    style={ styles.ATAIcon }
                />
            </ImageBackground>
        </View>
    );

}
