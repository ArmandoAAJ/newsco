import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const angle = Math.atan(width / (width / 2));

export const dimensions = {
  width,
  height,
  angle,
};
