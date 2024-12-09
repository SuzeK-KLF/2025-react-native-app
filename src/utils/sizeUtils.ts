import {Dimensions, PixelRatio} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const widthPercenToDp = (widthPercent: number) => {
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

const heightPercenToDp = (heightPercent: number) => {
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};

export {widthPercenToDp, heightPercenToDp};
