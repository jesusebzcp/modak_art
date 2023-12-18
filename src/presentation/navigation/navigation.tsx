import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackParamList} from './types';
//import {createStackNavigator} from '@react-navigation/stack';
import {
  createSharedElementStackNavigator,
  SharedElementCompatRoute,
} from 'react-navigation-shared-element';
import {EventScreen, HomeScreen} from '@pr/screens';
import {EventItem} from '@infra/features/queries/useQueryEvents';
import {FavoritesScreen} from '@pr/screens/FavoritesScreen';
import {NotificationsScreen} from '@pr/screens/NotificationsScreen';

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
            //presentation: 'modal',
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
