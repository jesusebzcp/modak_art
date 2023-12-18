import {COLORS} from '@pr/theme';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ContainerProps} from './props';

export const Container = ({children}: ContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.bg_screen}
        animated
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg_screen,
  },
});
