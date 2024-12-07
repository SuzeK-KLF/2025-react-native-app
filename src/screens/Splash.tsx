import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash():JSX.Element {
    return (
            <LottieView
                style={{flex:1, backgroundColor: 'black'}}
                source={require('../assets/lswmsSplash.json')}
                autoPlay
                loop={true}
                resizeMode="cover"
            />
    );
}
