import styled from 'styled-components/native';
import { isIos } from '../../utils/platform';

export const Container = styled.SafeAreaView<{
  safeAreaInsets: number;
}>`
  flex: 1;
  background-color: #0b0d10;
  position: relative;
  padding-top: ${({ safeAreaInsets }) => (isIos ? 0 : safeAreaInsets + 12)}px;
`;
