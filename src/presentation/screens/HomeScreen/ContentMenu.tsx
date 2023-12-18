import {AppText} from '@pr/components';
import {COLORS} from '@pr/theme';
import {METRICS} from '@pr/theme/metrics';
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {SvgHeart} from './SvgHeart';

type ContentMenuProps = {
  favoriteEventPress(): void;
};

export const ContentMenu = ({favoriteEventPress}: ContentMenuProps) => {
  return (
    <View style={styles.content}>
      <AppText.H1 color={COLORS.text_dark} weight="BOLD">
        {'Options'}
      </AppText.H1>
      <TouchableOpacity style={styles.button} onPress={favoriteEventPress}>
        <SvgHeart />
        <AppText.H5 color={COLORS.text_dark}>
          {'  My favorite events'}
        </AppText.H5>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: METRICS.screenHeight * 0.2,
    paddingHorizontal: METRICS.spacingHorizontal,
  },
  button: {
    marginTop: 20,
    height: 46,
    flexDirection: 'row',
  },
});
