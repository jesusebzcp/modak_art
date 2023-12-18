import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgMenuBurger = (props: SvgProps) => (
  <Svg width={22} height={18} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 17H1.667m8-16h-8m18.666 8H1.667"
    />
  </Svg>
);
