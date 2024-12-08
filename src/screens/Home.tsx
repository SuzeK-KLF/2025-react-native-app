import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function Home(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home JJJ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 90,
  },
});
