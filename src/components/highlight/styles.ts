import styled from 'styled-components/native';

export const Container = styled.View`
  width: 82px;
  padding: 1px;
  gap: 8px;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

export const Circle = styled.Pressable`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #01ff5e;
  align-items: center;
  justify-content: center;
`;

export const CircleContainer = styled.View`
  width: 76px;
  height: 76px;
  border-radius: 39px;
  background-color: #0b0d10;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background-color: #0b0d10;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #fff;
  text-align: center;
  font-weight: 500;
  line-height: 18px;
`;
