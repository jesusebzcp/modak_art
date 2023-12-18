import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
export const SvgSearch = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#2D264B"
        d="M13.989 12.22a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm1.772 3.894a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-2.833-2.834 2.833 2.834 1.061-1.061-2.833-2.833-1.06 1.06Zm-5.136-.572a5.625 5.625 0 0 1-5.625-5.625h-1.5a7.125 7.125 0 0 0 7.125 7.125v-1.5Zm5.625-5.625a5.625 5.625 0 0 1-5.625 5.625v1.5a7.125 7.125 0 0 0 7.125-7.125h-1.5ZM7.792 1.458a5.625 5.625 0 0 1 5.625 5.625h1.5A7.125 7.125 0 0 0 7.792-.042v1.5Zm0-1.5A7.125 7.125 0 0 0 .667 7.083h1.5a5.625 5.625 0 0 1 5.625-5.625v-1.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h17v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
