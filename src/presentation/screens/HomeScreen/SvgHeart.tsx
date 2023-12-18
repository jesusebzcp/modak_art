import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
export const SvgHeart = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.907 4.685a5.5 5.5 0 0 0-7.78 0l-1.06 1.06-1.06-1.06a5.501 5.501 0 1 0-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.067.075h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
