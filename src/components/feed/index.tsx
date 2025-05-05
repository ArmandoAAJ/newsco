import React from 'react';
import { FlatList, Image, View } from 'react-native';

import { Container } from './styles';

export const Feed = ({ listHeader }: { listHeader: React.ReactElement }) => {
  return (
    <FlatList
      contentContainerStyle={{
        paddingTop: 10,
      }}
      ListHeaderComponent={listHeader}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => {
        return (
          <Container>
            <Image
              style={{
                width: '100%',
                height: 'auto',
                flex: 1,
              }}
              resizeMode="stretch"
              source={require('../../assets/card.png')}
            />
          </Container>
        );
      }}
      keyExtractor={(item) => item.toString()}
    />
  );
};
