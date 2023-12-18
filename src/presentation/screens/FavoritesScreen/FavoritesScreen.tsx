import React from 'react';
import {Alert, FlatList, StyleSheet} from 'react-native';

import {useFavoriteEvents} from '@app/Context/FavoriteEventContext';
import {EventItem} from '@infra/features/queries/useQueryEvents';
import {AppHeader, CardEvent, Container} from '@pr/components';
import {METRICS} from '@pr/theme/metrics';

export const FavoritesScreen = () => {
  const {favoriteEvents, removeFavoriteEvent} = useFavoriteEvents();

  const onDelete = (event: EventItem) => {
    Alert.alert(
      'Confirmation',
      `Are you sure you want to delete the event: ${event.title} ?`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => removeFavoriteEvent(event.id),
        },
      ],
    );
  };
  return (
    <Container>
      <AppHeader title="My favorite events" />
      <FlatList
        style={style.list}
        data={favoriteEvents}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <CardEvent
            title={item.title}
            location={item.location}
            start_date={item.start_date}
            image_url={item.image_url}
            onPress={() => onDelete(item)}
            indexAnimation={index * 2}
            width={METRICS.screenWidth - 40}
          />
        )}
      />
    </Container>
  );
};

const style = StyleSheet.create({
  list: {
    flexGrow: 1,
    paddingHorizontal: METRICS.spacingHorizontal,
    marginTop: METRICS.spacingVertical,
  },
});
