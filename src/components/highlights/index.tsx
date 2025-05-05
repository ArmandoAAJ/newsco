import React from 'react';
import { Container } from './styles';
import { FlatList, View } from 'react-native';
import { slides } from '../../utils/constants';
import { Highlight } from '../highlight';

export const Highlights = ({ onPress }: { onPress: (idx: number) => void }) => {
  return (
    <Container>
      <FlatList
        data={slides}
        renderItem={({ item, index }) => (
          <Highlight
            title={item.title}
            imageUrl={item.data[0].source}
            onPress={() => onPress(index)}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingBottom: 12,
          backgroundColor: '#0b0d10',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => <View style={{ width: 6 }} />}
      />
    </Container>
  );
};
