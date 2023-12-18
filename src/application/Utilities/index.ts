import dayjs from 'dayjs';
import notifee from '@notifee/react-native';

type Notifee = {
  title: string;
  body: string;
};

export const formatDate = (date: string) => dayjs(date).format('YYYY/MM/DD');

export const onDisplayNotification = async ({body, title}: Notifee) => {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: title,
    body: body,
    android: {
      channelId,
    },
  });
};
