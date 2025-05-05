import styled from 'styled-components/native';

import { isIos } from '../../utils/platform';

export const Content = styled.View`
  padding: 14px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.SafeAreaView<{
  safeAreaInsets: number;
}>`
  position: absolute;
  left: 5px;
  right: 5px;
  z-index: 1;
  padding-top: ${({ safeAreaInsets }) => (isIos ? 0 : safeAreaInsets + 12)}px;
`;
