import React, {useEffect} from 'react';
import {AppState} from 'react-native';

import {Navigation} from '@pr/navigation';

import {WrapperQueries} from '@app/Wrappers/useQuery';
import {onDisplayNotification} from '@app/Utilities';

import {FavoriteEventsProvider} from '@app/Context/FavoriteEventContext';
import {SearchProvider} from '@app/Context/SearchContext';

const App = () => {
  useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      nextAppState => {
        console.log('Next AppState is: ', nextAppState);
        if (nextAppState === 'background') {
          onDisplayNotification({
            title: 'Thank you for using ModakE',
            body: 'Come back soon',
          });
        }
      },
    );
    return () => {
      appStateListener?.remove();
    };
  }, []);

  return (
    <WrapperQueries>
      <SearchProvider>
        <FavoriteEventsProvider>
          <Navigation />
        </FavoriteEventsProvider>
      </SearchProvider>
    </WrapperQueries>
  );
};

export default App;
