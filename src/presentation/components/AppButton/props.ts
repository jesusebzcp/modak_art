import {ViewStyle} from 'react-native/types';

export type AppButtonProps = {
  children: string;
  customStyles?: ViewStyle;
  onPress(): void;
};
