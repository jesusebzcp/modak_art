import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, View} from 'react-native';
import {AppModalProps} from './props';
import {COLORS} from '@pr/theme';
import {METRICS} from '@pr/theme/metrics';

export const AppModal = ({open, children, close}: AppModalProps) => {
  return (
    <Modal
      isVisible={open}
      style={styles.modal}
      onBackButtonPress={close}
      onBackdropPress={close}
      onSwipeComplete={close}
      swipeDirection={['down']}>
      <View style={styles.content}>
        <View style={styles.badge} />
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: COLORS.bg_screen,
    minHeight: METRICS.screenHeight * 0.2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  badge: {
    alignSelf: 'center',
    height: 8,
    width: METRICS.screenHeight * 0.1,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    marginVertical: 10,
  },
});
