import {COLORS} from '@pr/theme';
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {AppText} from '../AppText';
import {AppButtonProps} from './props';

export const AppButton = ({
  children,
  customStyles = {},
  onPress,
}: AppButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <AppText.H4 color={COLORS.text_light} weight="MEDIUM">
        {children}
      </AppText.H4>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 46,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 12,
  },
});
