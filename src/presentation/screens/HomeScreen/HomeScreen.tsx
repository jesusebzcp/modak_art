import React, {useCallback, useState} from 'react';

import {Container} from '@pr/components';
import {CardEvent} from '@pr/components/CardEvent';

import {Header} from './Header';
import {HorizontalList} from './HorizontalList';
import {HomeProps} from './props';
import {useActions} from './useActions';
import {AppModal} from '@pr/components/AppModal/AppModal';
import {ContentMenu} from './ContentMenu';
import {Linking} from 'react-native';

export const HomeScreen = (props: HomeProps) => {
  const [openMenuBurger, setOpenMenuBurger] = useState(false);
  const {events} = useActions({
    page: 1,
  });
  const {events: events2} = useActions({
    page: 2,
  });

  const switchMenu = useCallback(() => setOpenMenuBurger(prev => !prev), []);

  const navigateFavorites = useCallback(() => {
    switchMenu();
    props.navigation.navigate('FAVORITE');
  }, []);

  const moreData = () => {
    Linking.openURL('https://api.artic.edu/docs/');
  };

  return (
    <Container>
      <Header
        onMenuBurger={switchMenu}
        onNotifications={() => props.navigation.navigate('NOTIFICATIONS')}
      />
      <HorizontalList
        headerProps={{
          title: 'Trending Events',
          textCallToAction: 'See all',
          onAction: moreData,
        }}
        renderItem={({item, index}) => {
          return (
            <CardEvent
              indexAnimation={index}
              title={item.title}
              location={item.location}
              start_date={item.start_date}
              image_url={item.image_url}
              onPress={() =>
                props.navigation.navigate('EVENT_DETAIL', {
                  event: item,
                })
              }
            />
          );
        }}
        data={events}
      />
      <HorizontalList
        headerProps={{
          title: 'Events Near You',
          textCallToAction: 'See all',
          onAction: moreData,
        }}
        renderItem={({item, index}) => {
          return (
            <CardEvent
              indexAnimation={index * 2}
              variant="secondary"
              title={item.title}
              location={item.location}
              start_date={item.start_date}
              image_url={item.image_url}
              onPress={() =>
                props.navigation.navigate('EVENT_DETAIL', {
                  event: item,
                })
              }
            />
          );
        }}
        data={events2}
      />
      <AppModal open={openMenuBurger} close={switchMenu}>
        <ContentMenu favoriteEventPress={navigateFavorites} />
      </AppModal>
    </Container>
  );
};
