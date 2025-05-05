import React from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { dimensions } from '../../utils/dimmensions';

const { width, angle } = dimensions;

interface Props {
  index: number;
  scrollX: Animated.SharedValue<number>;
  children: React.ReactNode;
}

export const SlideWrapper = ({ index, scrollX, children }: Props) => {
  const inputRange = [
    (index - 0.5) * width,
    index * width,
    (index + 0.5) * width,
  ];

  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      scrollX.value,
      inputRange,
      [angle / 2, 0, -angle / 2],
      Extrapolation.CLAMP
    );
    const translateX1 = interpolate(
      scrollX.value,
      inputRange,
      [-width / 2, 0, width / 2],
      Extrapolation.CLAMP
    );
    const translateX2 = interpolate(
      scrollX.value,
      inputRange,
      [width / 2, 0, -width / 2],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        { perspective: width * 4 },
        { translateX: Math.round(translateX1) },
        { rotateY: `${rotateY}rad` },
        { translateX: Math.round(translateX2) },
      ],
    };
  });

  return (
    <Animated.View renderToHardwareTextureAndroid style={animatedStyle}>
      {children}
    </Animated.View>
  );
};
