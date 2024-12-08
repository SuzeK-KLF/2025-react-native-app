import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash(): JSX.Element {
  return (
    <LottieView
      style={styles.container}
      source={require('../assets/lswmsSplash.json')}
      autoPlay
      loop={false}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
