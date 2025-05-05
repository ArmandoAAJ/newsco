import React from 'react';
import { Animated, Dimensions, Easing } from 'react-native';
import { Wrapper } from './styles';

import { dimensions } from '../../utils/dimmensions';
const { width } = dimensions;

interface Props {
  isLongPressed: boolean;
  done: boolean;
  activeIndex: number;
  index: number;
  onEnd: (index: number) => void;
  active: boolean;
  duration?: number;
}

export const StoryProgress = ({
  isLongPressed,
  done,
  index,
  onEnd,
  active,
  duration = 2000,
}: Props) => {
  const progress = React.useRef(new Animated.Value(-width / 3)).current;
  const [progressWidth, setProgressWidth] = React.useState(0);
  const longPressElapsedDuration = React.useRef(0);

  const animation = (durations: number) =>
    Animated.timing(progress, {
      toValue: 0,
      duration: durations,
      easing: Easing.linear,
      useNativeDriver: true,
    });

  React.useEffect(() => {
    const listener = progress.addListener(({ value }) => {
      longPressElapsedDuration.current = Math.abs(
        (value * duration) / progressWidth
      );
    });

    return () => {
      progress.removeListener(listener);
      progress.removeAllListeners();
    };
  });

  React.useEffect(() => {
    if (isLongPressed) {
      progress.stopAnimation();
    } else {
      if (active) {
        animation(longPressElapsedDuration.current).start((status) => {
          if (status.finished) {
            onEnd(index + 1);
          }
        });
      }
    }
  }, [isLongPressed, progressWidth]);

  React.useEffect(() => {
    progress.setValue(-progressWidth);
    if (active) {
      progress.setValue(-progressWidth);
      animation(duration).start((status) => {
        if (status.finished) {
          onEnd(index + 1);
        }
      });
    }

    if (done) {
      progress.setValue(0);
      return;
    }
  }, [active, done]);

  React.useEffect(() => {
    progress.setValue(-progressWidth);
  }, [progressWidth]);

  return (
    <Wrapper key={index}>
      <Animated.View
        onLayout={(e) => setProgressWidth(e.nativeEvent.layout.width)}
        style={{
          height: 4,
          backgroundColor: '#01ff5e',
          transform: [
            {
              translateX: progress,
            },
          ],
        }}
      />
    </Wrapper>
  );
};
