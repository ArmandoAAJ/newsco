import React from 'react';

import { Container, Content } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgSlideAvatarComponent } from '../../assets/svg/slideAvatar';
import { SvgSlideActionComponent } from '../../assets/svg/slideActions';
import { Pressable } from 'react-native';

export const SlideHeader = ({ onPress }: { onPress: () => void }) => {
  const { top } = useSafeAreaInsets();
  return (
    <Container safeAreaInsets={top}>
      <Content>
        <SvgSlideAvatarComponent />
        <Pressable onPress={onPress}>
          <SvgSlideActionComponent />
        </Pressable>
      </Content>
    </Container>
  );
};
