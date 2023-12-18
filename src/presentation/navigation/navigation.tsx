import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createSharedElementStackNavigator,
  SharedElementCompatRoute,
} from 'react-navigation-shared-element';

import {
  EventScreen,
  FavoritesScreen,
  HomeScreen,
  NotificationsScreen,
} from '@pr/screens';

import type {EventItem} from '@infra/features/queries/useQueryEvents';

import {MainStackParamList} from './types';

const MainStack = createSharedElementStackNavigator<MainStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'HOME'}>
        <MainStack.Screen name="HOME" component={HomeScreen} />
        <MainStack.Screen
          name="EVENT_DETAIL"
          component={EventScreen}
          options={{
            presentation: 'transparentModal',
          }}
          sharedElements={(route: SharedElementCompatRoute) => {
            const event: EventItem = route.params.event;
            return [
              {
                id: event.image_url,
                animation: 'move',
                resize: 'clip',
              },
              {
                id: event.title,
                animation: 'move',
                resize: 'clip',
              },
            ];
          }}
        />
        <MainStack.Screen name="FAVORITE" component={FavoritesScreen} />
        <MainStack.Screen
          name="NOTIFICATIONS"
          component={NotificationsScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
