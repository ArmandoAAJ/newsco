import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { StoryProgress } from '../storyProgress';
import { SlideNavigation } from '../slideTouchable';
import { Container, ContentImage, ContentProgress, Image } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SlideHeader } from '../slideHeader';

interface Props {
  isScrolling: boolean;
  item: {
    data: { source: string }[];
  };
  index: number;
  active: boolean;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onCloseSlide: () => void;
}

export const Slide = ({
  isScrolling,
  item,
  index,
  active,
  onNextSlide,
  onPrevSlide,
  onCloseSlide,
}: Props) => {
  const { top } = useSafeAreaInsets();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [duration, _] = React.useState(5000);
  const [loading, setLoading] = React.useState(true);

  const goPrev = React.useCallback(
    (newSlide: number) => {
      if (newSlide < 0) {
        return onPrevSlide();
      }
      setLoading(true);
      setActiveSlide(newSlide);
    },
    [activeSlide]
  );

  const goNext = React.useCallback(
    (newSlide: number) => {
      if (newSlide > item.data.length - 1) {
        return onNextSlide();
      }
      setLoading(true);
      setActiveSlide(newSlide);
    },
    [activeSlide]
  );

  const onClose = React.useCallback(() => {
    onCloseSlide();
  }, []);

  const [isLongPressed, setIsLongPressed] = React.useState(false);

  return (
    <>
      <Container>
        <ContentImage>
          <Image
            onLoad={() => setLoading(false)}
            source={{ uri: item.data[activeSlide].source }}
          />
        </ContentImage>
        <SlideHeader onPress={onClose} />
        <Image
          style={{
            width: '100%',
          }}
          source={require('../../assets/text.png')}
          resizeMode="stretch"
        />
        <SlideNavigation
          onPrev={() => goPrev(activeSlide - 1)}
          onNext={() => goNext(activeSlide + 1)}
          onLongPress={() => setIsLongPressed(true)}
          onPressOut={() => setIsLongPressed(false)}
        />
        <ContentProgress safeAreaInsets={top} key={`story-progress-${index}`}>
          {item.data.map((_, i) => {
            return (
              <StoryProgress
                isLongPressed={isLongPressed || isScrolling || loading}
                activeIndex={activeSlide}
                index={i}
                key={`story-progress-${index}-${i}`}
                done={activeSlide > i}
                active={activeSlide === i && !loading && active}
                duration={duration}
                onEnd={goNext}
              />
            );
          })}
        </ContentProgress>
      </Container>
    </>
  );
};
