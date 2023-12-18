import {METRICS} from '@pr/theme/metrics';
import {PixelRatio, Platform} from 'react-native';

const NORMALIZE_FONTS = true;
const SCALE = METRICS.screenWidth / 375;

export const normalize = (size: number) => {
  if (NORMALIZE_FONTS) {
    const newSize = size * SCALE;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }
};
