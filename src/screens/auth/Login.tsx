import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercenToDp as hp,
  widthPercenToDp as wp,
} from '../../utils/sizeUtils';
import COLORS from '../../utils/colorUtils';
import OrangeButton from '../../components/OrangeButton';

interface LoginProps {}

const Login = (props: LoginProps) => {
  const {} = props;
  return (
    <LinearGradient
      colors={[COLORS.GRADIENT_2_1, COLORS.GRADIENT_2_2, COLORS.GRADIENT_2_3, COLORS.GRADIENT_2_4, COLORS.GRADIENT_2_5]}
      style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.wmsText}>LS</Text>
        <Text style={styles.wmsText}>WMS</Text>
      </View>
      <View style={styles.bottom}>
        <OrangeButton
            text={"Start with us"}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 2,
    paddingVertical: hp(10),
    justifyContent: 'flex-end',
  },
  bottom: {
    flex: 1,
  },
  wmsText: {
    color: '#fff',
    letterSpacing: wp(4),
    fontSize: wp(14),
    fontFamily: 'Montserrat-light',
  },
});

export default Login;
