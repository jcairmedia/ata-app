import React, { useEffect, useRef } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from "../../Theme/appTheme";

export const Loading = ({ isVisible }) =>
{
    const animation = useRef(null);

    useEffect(() =>
    {
         animation.current.play();

    }, []);

    return(
        isVisible ?  <View style={{
            ...styles.mainContainer,
            height: '100%',
            width: '100%',
            position:'absolute',

        }}>
            <View
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'gray',
                    opacity: 0.5
                }}>
            </View>

            <LottieView
                ref={animation}
                style={{
                }}
                source={require('./../../Assets/Animations/lf30_editor_7rarse8c.json')}
            />
        </View> : null

    );
}