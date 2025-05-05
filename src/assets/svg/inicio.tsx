import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const SvgInicioComponent = (props: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path
        d="M15.5 18.998c-.8.622-1.85 1-3 1s-2.2-.378-3-1"
        stroke="#01FF5E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.851 15.211c-.353-2.297-.53-3.445-.095-4.464C3.19 9.73 4.154 9.032 6.081 7.64l1.44-1.041c2.397-1.733 3.596-2.6 4.979-2.6s2.582.867 4.979 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856-1.168.971-2.875.971-6.29.971H11.36c-3.415 0-5.122 0-6.29-.971-1.168-.972-1.418-2.6-1.919-5.857l-.3-1.959z"
        stroke="#01FF5E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
