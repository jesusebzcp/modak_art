import {PropsWithChildren, ReactNode} from 'react';
import {TextInputProps} from 'react-native/types';

export type AppInputProps = {
  ph: string;
  nativeProps?: TextInputProps;
  value?: string;
  onChangeText?: (text: string) => void;
  iconRight?: ReactNode;
};
