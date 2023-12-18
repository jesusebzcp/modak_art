import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {AppText, AppButton} from '@pr/components';
import {COLORS} from '@pr/theme';
import {METRICS} from '@pr/theme/metrics';

type FooterActionProps = {
  saveEvent(): void;
  deleteEvent(): void;
  saveToCalendar(): void;
  isSave: boolean;
};

export const FooterAction = ({
  deleteEvent,
  isSave,
  saveEvent,
  saveToCalendar,
}: FooterActionProps) => {
  return (
    <Animatable.View
      delay={250}
      animation={'fadeInUpBig'}
      style={styles.footer}>
      <TouchableOpacity
        style={styles.liked}
        onPress={isSave ? deleteEvent : saveEvent}>
        <AppText.H5 weight="MEDIUM" color={COLORS.secondary}>
          {isSave ? 'Un Save' : 'Save'}
        </AppText.H5>
      </TouchableOpacity>

      <AppButton onPress={saveToCalendar}>{'Save to calendar'}</AppButton>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: METRICS.spacingVertical * 3,
    paddingHorizontal: METRICS.spacingHorizontal,
    backgroundColor: COLORS.text_light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  liked: {
    marginRight: 20,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
