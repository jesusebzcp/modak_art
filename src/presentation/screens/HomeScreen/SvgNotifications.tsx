import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgNotifications = (props: SvgProps) => (
  <Svg width={16} height={20} fill="none" {...props}>
    <Path
      stroke="#2D264B"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m5.653 17.5.25.333a2.812 2.812 0 0 0 4.5 0l.25-.333m-9.014-4.542.086.178A3.308 3.308 0 0 0 4.7 15h6.85a3.177 3.177 0 0 0 2.163-5.505l-.037-.034a3.237 3.237 0 0 1-1.009-2.773l.054-.43a4.084 4.084 0 0 0-4.053-4.591H7.25a4.08 4.08 0 0 0-4.048 4.585l.066.529a3.042 3.042 0 0 1-.955 2.613 3.042 3.042 0 0 0-.675 3.564Z"
    />
  </Svg>
);
