import React, { useState } from 'react';
import { View, Dimensions } from "react-native";
import { localImages } from "../../Assets/assets";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CarouselItem } from "../Molecules/CarouselItem";
import {colors, styles} from "../../Theme/appTheme";

export const CustomCarousel  = () =>
{
    const { width: windowWidth } =  Dimensions.get('window');
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        localImages.slide01,
        localImages.slide02,
        localImages.slide03,
        localImages.slide04,
        localImages.slide05,
    ]

    return (
        <View style={ styles.mainContainer }>

            <Carousel
             data={ images }

             renderItem = { ({ item }) => <CarouselItem image={ item } /> }

             onSnapToItem={(index) => setActiveIndex( index )}

             sliderWidth={ windowWidth }
             itemWidth={ windowWidth - 20 }
             loop={ true }
             autoplay={ true }
             autoplayDelay={1000}
             autoplayInterval={4000}
             lockScrollWhileSnapping={true}
            />

            <Pagination
                dotsLength={ images.length }
                activeDotIndex={ activeIndex }
                containerStyle={{
                    marginTop: -60,
                    marginBottom: 15
                }}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 10,
                    marginHorizontal: 0,
                    backgroundColor: colors.primaryColor,
                }}
                inactiveDotStyle={{
                    backgroundColor: 'gray',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />

        </View>
    );

}
