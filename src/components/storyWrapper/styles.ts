import styled from 'styled-components/native';
import { dimensions } from '../../utils/dimmensions';
import Animated from 'react-native-reanimated';

const { width, height } = dimensions;

interface Props {
  hasActiveIndex?: boolean;
}

export const Container = styled(Animated.View)<Props>`
  bottom: 0;
  height: ${height}px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: ${width}px;
  z-index: 999;
  background-color: #0b0d10;
  pointer-events: ${({ hasActiveIndex }) => (hasActiveIndex ? 'auto' : 'none')};
`;
