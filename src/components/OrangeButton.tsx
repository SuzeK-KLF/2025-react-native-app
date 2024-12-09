import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercenToDp as hp,
  widthPercenToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';

interface OrangeButtonProps {
  text: string | number;
}

const OrangeButton = (props: OrangeButtonProps) => {
  const {text} = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        console.log('press...');
      }}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: COLORS.WHITE,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: wp(0.5),
  },
  button: {
    backgroundColor: COLORS.ORANGE_BUTTON,
    height: hp(4),
    width: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(4),
    shadowColor: COLORS.GREY,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },
});

export default OrangeButton;
