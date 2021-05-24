import React from "react";
import { View, Image, Text } from "react-native";
import { styles} from "../../Theme/appTheme";

export const CarouselItem  = ({ image }) => {


    
    return (
        <View style={{
            ...styles.mainContainer
        }}>
            <Image
                source={ image }
                style={{
                    ...styles.mainContainer,
                    flex: 1,
                    width: '100%',
                    resizeMode: 'contain',
                }}
            />
        </View>
    );

}
