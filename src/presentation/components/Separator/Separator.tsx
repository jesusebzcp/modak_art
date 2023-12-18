import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SeparatorProps} from './props';

export const Separator = ({size = 10}: SeparatorProps) => {
  const styles = StyleSheet.create({
    separator: {
      marginVertical: size,
    },
  });

  return <View style={styles.separator} />;
};
