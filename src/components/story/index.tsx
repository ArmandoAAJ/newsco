import React, { act, useEffect, useImperativeHandle } from 'react';

import { slides } from '../../utils/constants';

import { StoryWrapper } from '../storyWrapper';

import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { StoryItem } from '../storyItem';

import { dimensions } from '../../utils/dimmensions';
import { FlatList, PanGestureHandler } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { width } = dimensions;

export const StoryList = ({ refFoward }: { refFoward: React.Ref<any> }) => {
  const navigation = useNavigation();
  const scrollX = useSharedValue(0);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [isScrolling, setIsScrolling] = React.useState(false);

  useEffect(() => {
    if (activeIndex === null) {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
          backgroundColor: '#0b0d10',
          borderColor: '#0b0d10',
        },
      });
    }
  }, [activeIndex]);

  useImperativeHandle(refFoward, () => ({
    scrollToIndex: (index: number) => {
      if (!ref?.current) return;

      ref.current.scrollToIndex({
        index: index,
        animated: false,
        viewPosition: 0,
      });

      setActiveIndex(index);
    },
  }));

  const onClose = React.useCallback(() => {
    setActiveIndex(null);
  }, []);

  const ref =
    React.useRef<
      FlatList<{ key: string; data: { type: string; source: string }[] }>
    >(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
    onEndDrag: (event) => {
      if (activeIndex === 0 || activeIndex === slides.length - 1) {
        if (event.contentOffset.x < -50) {
          runOnJS(onClose)();
          return;
        }

        if (event.contentOffset.x > width * (slides.length - 1) + 50) {
          runOnJS(onClose)();
          return;
        }
      }
    },
  });

  const hasActiveIndex = activeIndex !== null;

  return (
    <StoryWrapper hasActiveIndex={hasActiveIndex}>
      <PanGestureHandler
        activeOffsetY={10}
        failOffsetX={[-5, 5]}
        onGestureEvent={(event) => {
          if (event.nativeEvent.translationY > 100) {
            onClose();
          }
        }}
        onBegan={() => {
          setIsScrolling(true);
        }}
        onEnded={() => {
          setIsScrolling(false);
        }}
        onFailed={() => {
          setIsScrolling(false);
        }}
      >
        <Animated.FlatList
          ref={ref}
          data={slides}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pointerEvents={activeIndex !== null ? 'auto' : 'none'}
          style={{ opacity: activeIndex !== null ? 1 : 0 }}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={5}
          onScroll={scrollHandler}
          pagingEnabled
          onScrollBeginDrag={() => {
            setIsScrolling(true);
          }}
          onScrollEndDrag={() => {
            setIsScrolling(false);
          }}
          onMomentumScrollEnd={(ev) => {
            const offsetX = ev.nativeEvent.contentOffset.x;

            if (activeIndex === null) return;

            if (Math.abs(offsetX - (activeIndex ?? 0) * width) > width * 0.5) {
              setActiveIndex(Math.round(offsetX / width));
            }
          }}
          renderItem={({ item, index }) => (
            <StoryItem
              item={item}
              index={index}
              scrollX={scrollX}
              activeIndex={activeIndex}
              isScrolling={isScrolling}
              refList={ref}
              onClose={onClose}
            />
          )}
        />
      </PanGestureHandler>
    </StoryWrapper>
  );
};
