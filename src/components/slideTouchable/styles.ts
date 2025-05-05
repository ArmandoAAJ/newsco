import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableWithoutFeedback)``;

export const Content = styled.View`
  flex: 1;
  background-color: transparent;
`;

export const ContentTouchable = styled.View`
  flex-direction: row;
`;
