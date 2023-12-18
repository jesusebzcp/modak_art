import {COLORS} from '@pr/theme';
import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {AppInputProps} from './props';

export const AppInput = ({
  ph,
  iconRight,
  nativeProps,
  onChangeText,
  value,
}: AppInputProps) => {
  return (
    <View style={styles.containerInput}>
      {iconRight}
      <TextInput
        {...nativeProps}
        style={styles.input}
        placeholder={ph}
        placeholderTextColor={COLORS.text_dark}
        selectionColor={COLORS.primary}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    height: 41,
    borderRadius: 8,
    backgroundColor: COLORS.text_light,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 41,
  },
});
