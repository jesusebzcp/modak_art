import React, {PropsWithChildren} from 'react';

import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();
const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

export type ContainerProps = PropsWithChildren<{}>;

export const WrapperQueries = ({children}: ContainerProps) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: asyncStoragePersister,
      }}>
      {children}
    </PersistQueryClientProvider>
  );
};
