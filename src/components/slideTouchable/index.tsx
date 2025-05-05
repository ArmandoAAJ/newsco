import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Container, Content, ContentTouchable } from './styles';

interface Props extends React.ComponentProps<typeof TouchableWithoutFeedback> {}

const SlideTouchableArea = ({ ...rest }: Props) => (
  <Container delayLongPress={200} {...rest}>
    <Content />
  </Container>
);

interface SlideNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  onLongPress: () => void;
  onPressOut: () => void;
}

export const SlideNavigation = ({
  onPrev,
  onNext,
  onLongPress,
  onPressOut,
}: SlideNavigationProps) => (
  <ContentTouchable style={[StyleSheet.absoluteFillObject]}>
    <SlideTouchableArea
      onPress={onPrev}
      onLongPress={onLongPress}
      onPressOut={onPressOut}
    />
    <SlideTouchableArea
      onPress={onNext}
      onLongPress={onLongPress}
      onPressOut={onPressOut}
    />
  </ContentTouchable>
);
