import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const SvgSlideActionComponent = (props: SvgProps) => {
  return (
    <Svg width={88} height={32} viewBox="0 0 88 32" fill="none" {...props}>
      <Path
        d="M0 16C0 7.163 7.163 0 16 0h18c8.837 0 16 7.163 16 16s-7.163 16-16 16H16C7.163 32 0 24.837 0 16z"
        fill="#323842"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.65 14.429a2.222 2.222 0 113.143 3.143 2.222 2.222 0 01-3.142-3.143zm7.779 0a2.222 2.222 0 113.142 3.142 2.222 2.222 0 01-3.142-3.142zm7.777 0a2.223 2.223 0 113.143 3.143 2.223 2.223 0 01-3.143-3.143z"
        fill="#fff"
      />
      <Path
        d="M56 16c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16-16-7.163-16-16z"
        fill="#323842"
      />
      <Path
        d="M67.028 11l9.966 9.991M67.007 21l9.978-9.978"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
