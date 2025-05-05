import React from 'react';

import { Container, Content } from './styles';

import { SvgLogoComponent } from '../../assets/svg/logo';
import { SvgIconsComponent } from '../../assets/svg/icons';
import { SvgUserComponent } from '../../assets/svg/user';
import { SvgPlayComponent } from '../../assets/svg/play';

export const HeaderUser = () => {
  return (
    <Container>
      <Content>
        <SvgLogoComponent />
        <SvgIconsComponent />
      </Content>
    </Container>
  );
};

export const HeaderPlay = () => {
  return (
    <Container>
      <Content>
        <SvgUserComponent />
        <SvgPlayComponent />
      </Content>
    </Container>
  );
};
