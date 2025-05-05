import React, { useCallback } from 'react';
import { StoryList } from '../../components/story';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Highlights } from '../../components/highlights';
import { HeaderPlay, HeaderUser } from '../../components/header';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feed } from '../../components/feed';

export const Home = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const ref = React.useRef<any>(null);

  const handleHighlightPress = useCallback(
    (idx: number) => {
      if (!ref.current) return;

      navigation.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });

      ref.current?.scrollToIndex(idx);
    },
    [navigation]
  );

  const ListHeader = () => (
    <>
      <HeaderPlay />
      <Highlights onPress={handleHighlightPress} />
    </>
  );

  return (
    <Container safeAreaInsets={top}>
      <HeaderUser />
      <StoryList refFoward={ref} />
      <Feed listHeader={<ListHeader />} />
    </Container>
  );
};
