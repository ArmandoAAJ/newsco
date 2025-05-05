import styled from 'styled-components/native';

import { dimensions } from '../../utils/dimmensions';
import { isIos } from '../../utils/platform';

const { width, height } = dimensions;

export const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
`;

export const ContentTouchable = styled.View`
  flex-direction: row;
`;

export const ContentImage = styled.View`
  height: 60%;
`;

export const Image = styled.Image`
  flex: 1;
`;

export const ContentProgress = styled.SafeAreaView<{
  safeAreaInsets: number;
}>`
  align-items: center;
  flex-direction: row;
  gap: 2px;
  justify-content: space-around;
  position: absolute;
  left: 5px;
  right: 5px;
  padding-top: ${({ safeAreaInsets }) => (isIos ? 0 : safeAreaInsets + 12)}px;
`;
