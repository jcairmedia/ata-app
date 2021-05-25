import React, {useState} from "react"
import {ImageBackground, StyleSheet, Text, View, FlatList, Image, ScrollView} from "react-native";
import {styles} from "../../../Theme/appTheme";
import {localImages} from "../../../Assets/assets";
import {NavigationHeader} from "../../../Components/Organisms/NavigationHeader";

import {WebView} from 'react-native-webview';


export const ConsultEntry = ({route}) => {
    const item = route.params;

    return (
        <View style={styles.mainContainer}>

            <NavigationHeader title={item.title}/>

            <ImageBackground
                source={localImages.whiteSectionBackground}
                style={{
                    ...styles.backgroundContainer,
                }}>

                <ScrollView
                    style={{
                        ...styles.mainContainer,
                    }}>

                    <Image
                        source={{uri: item.coverImageUrl}}
                        style={{
                            height: 100,
                            width: '100%',
                            borderRadius: 5,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                        }}/>

                    <View style={{
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: '100%',
                        height: '100%',
                        padding: 20
                    }}>
                        <WebView
                            originWhitelist={['*']}
                            source={{
                                html: item.body
                            }}
                            style={{
                                height: 1000
                            }}
                        />
                    </View>

                </ScrollView>

            </ImageBackground>
        </View>
    );
}