import {METRICS} from '@pr/theme/metrics';
import React, {useMemo} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SharedElement} from 'react-navigation-shared-element';
import {EventScreenProps} from './props';
import Pinchable from 'react-native-pinchable';
import {InformationCard} from './InformationCard';
import {ScrollView} from 'react-native';
import {EventItem} from '@infra/features/queries/useQueryEvents';
import {SvgArrowBack} from './SvgArrowBack';
import {COLORS, opacityColor} from '@pr/theme/colors';
import {FooterAction} from './FooterAction';
import RenderHTML from 'react-native-render-html';
import {AppText} from '@pr/components';
import * as Animatable from 'react-native-animatable';
import {useFavoriteEvents} from '@app/Context/FavoriteEventContext';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {presentEventCreatingDialog} from '../../../../modules/RNAddCalendar/src';

export const EventScreen = (props: EventScreenProps) => {
  const {addFavoriteEvent, removeFavoriteEvent, favoriteEvents} =
    useFavoriteEvents();

  const event: EventItem = props.route.params.event;

  const isFavorite = useMemo(
    () =>
      favoriteEvents.length > 0
        ? favoriteEvents.map(f => f.id).includes(event.id)
        : false,
    [favoriteEvents, event],
  );

  const saveToCalendar = async () => {
    const calendarEvent = {
      title: event.title,
      startDate: event.start_date,
      endDate: event.end_date,
      location: event.location,
      notes: event.description,
      url: event.join_url,
    };
    try {
      if (Platform.OS === 'ios') {
        const stats = await check(PERMISSIONS.IOS.CALENDARS);
        console.log('stats', stats);

        if (stats === RESULTS.GRANTED) {
          await presentEventCreatingDialog(calendarEvent);
        } else {
          await request(PERMISSIONS.IOS.CALENDARS);
        }
      } else {
        await presentEventCreatingDialog(calendarEvent);
      }
    } catch (error) {
      console.log('error', error);
      Alert.alert('Oops...', 'an unexpected error occurred');
    }
  };
  const source = {
    html: event.description,
  };
  return (
    <>
      <StatusBar backgroundColor={'transparent'} animated />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <TouchableOpacity
            style={styles.back}
            onPress={props.navigation.goBack}>
            <SvgArrowBack />
          </TouchableOpacity>
          <SharedElement id={event.image_url}>
            <Pinchable>
              <FastImage
                source={{
                  uri: event.image_url,
                }}
                style={{
                  width: METRICS.screenWidth,
                  height: METRICS.screenHeight / 2,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Pinchable>
          </SharedElement>
          <InformationCard
            title={event.title}
            location={event.location}
            start_date={event.start_date}
          />
        </View>
        <Animatable.View animation={'fadeInUpBig'} style={styles.body}>
          <AppText.H2>{'Description'}</AppText.H2>
          <RenderHTML
            contentWidth={METRICS.screenWidth}
            source={source}
            tagsStyles={{
              ['p']: {color: COLORS.text_dark},
              ['h1']: {color: COLORS.text_dark},
              ['h2']: {color: COLORS.text_dark},
              ['h3']: {color: COLORS.text_dark},
              ['h4']: {color: COLORS.text_dark},
              ['h5']: {color: COLORS.text_dark},
              ['h6']: {color: COLORS.text_dark},
              ['span']: {color: COLORS.text_dark},
            }}
          />
        </Animatable.View>
      </ScrollView>
      <FooterAction
        saveEvent={() => addFavoriteEvent(event)}
        deleteEvent={() => removeFavoriteEvent(event.id)}
        saveToCalendar={saveToCalendar}
        isSave={isFavorite}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.bg_screen,
    paddingBottom: METRICS.screenHeight * 0.1,
  },
  hero: {
    position: 'relative',
  },
  back: {
    zIndex: 2,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    left: METRICS.spacingHorizontal,
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: opacityColor(COLORS.text_dark, 0.8),
  },
  body: {
    marginHorizontal: METRICS.spacingHorizontal,
    marginTop: 100,
  },
});
