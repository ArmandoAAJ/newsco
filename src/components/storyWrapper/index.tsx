import React, { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
  hasActiveIndex?: boolean;
}

export const StoryWrapper = ({ children, hasActiveIndex }: Props) => {
  const scale = useSharedValue(2);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (hasActiveIndex) {
      scale.value = withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
      opacity.value = 1;
    } else {
      scale.value = withTiming(2, {
        duration: 450,
        easing: Easing.inOut(Easing.ease),
      });
      opacity.value = withTiming(0, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [hasActiveIndex]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Container hasActiveIndex={hasActiveIndex} style={[animatedStyle]}>
      {children}
    </Container>
  );
};
