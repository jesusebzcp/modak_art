import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgArrowBack = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m11.667 14.167-1.47-1.456c-1.171-1.162-1.757-1.742-1.847-2.45a2.065 2.065 0 0 1 0-.522c.09-.708.676-1.288 1.848-2.45l1.469-1.456"
    />
  </Svg>
);
