import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
export const METRICS = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  spacingHorizontal: Platform.OS === 'android' ? 20 : 10,
  spacingVertical: 10,
};
