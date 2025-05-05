import React from 'react';
import { Circle, CircleContainer, Container, Image, Title } from './styles';

type HighlightProps = {
  title?: string;
  imageUrl?: string;
  onPress: () => void;
};

export const Highlight: React.FC<HighlightProps> = ({
  title = 'Política',
  imageUrl = 'https://avatars.githubusercontent.com/u/7575325?s=400&u=21b18f6aa8dc8edd5038265b9f558cc83d5f5b06&v=4',
  onPress,
}) => {
  return (
    <Container>
      <Circle onPress={onPress}>
        <CircleContainer>
          <Image
            source={{
              uri: imageUrl,
            }}
          />
        </CircleContainer>
      </Circle>
      {title && (
        <Title numberOfLines={1} ellipsizeMode="tail">
          {title.toUpperCase()}
        </Title>
      )}
    </Container>
  );
};
