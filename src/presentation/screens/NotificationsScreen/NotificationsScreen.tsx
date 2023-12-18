import {AppText, Container} from '@pr/components';
import {AppHeader} from '@pr/components/AppHeader';
import React, {useEffect} from 'react';
import notifee from '@notifee/react-native';
import {StyleSheet, View} from 'react-native';
import {METRICS} from '@pr/theme/metrics';
import {COLORS} from '@pr/theme';

export const NotificationsScreen = () => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Modak',
      body: 'Thank you for the opportunity',
      android: {
        channelId,
      },
    });
  }

  useEffect(() => {
    onDisplayNotification();
  }, [onDisplayNotification]);

  return (
    <Container>
      <AppHeader title="Notifications center" />
      <View style={styles.container}>
        <AppText color={COLORS.text_dark}>
          {'We are using local notifications'}
        </AppText>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: METRICS.spacingHorizontal,
    marginTop: METRICS.spacingVertical,
  },
});
