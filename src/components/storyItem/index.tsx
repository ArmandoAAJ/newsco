import React, { memo, useCallback } from 'react';
import { Slide } from '../slide';
import { SlideWrapper } from '../slideWrapper';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { dimensions } from '../../utils/dimmensions';

const { width } = dimensions;

interface Props {
  item: any;
  index: number;
  scrollX: Animated.SharedValue<number>;
  activeIndex: number | null;
  isScrolling: boolean;
  refList?: React.RefObject<FlatList>;
  onClose: () => void;
}

export const StoryItem = memo(
  ({
    item,
    index,
    scrollX,
    activeIndex,
    isScrolling,
    refList,
    onClose,
  }: Props) => {
    const handleNextSlide = useCallback(() => {
      const itemSize = (index + 1) * width;
      const length = refList?.current?.props?.data?.length;

      if (length && itemSize > (length - 1) * width) {
        return onClose();
      }

      refList?.current?.scrollToOffset({
        offset: (index + 1) * width,
        animated: true,
      });
    }, [refList, index]);

    const handlePrevSlide = useCallback(() => {
      const itemSize = (index - 1) * width;
      if (itemSize < 0) {
        return onClose();
      }

      refList?.current?.scrollToOffset({
        offset: (index - 1) * width,
        animated: true,
      });
    }, [refList, index]);

    return (
      <SlideWrapper scrollX={scrollX} index={index}>
        <Slide
          item={item}
          index={index}
          active={index === activeIndex}
          isScrolling={isScrolling}
          onNextSlide={handleNextSlide}
          onPrevSlide={handlePrevSlide}
          onCloseSlide={onClose}
        />
      </SlideWrapper>
    );
  }
);
