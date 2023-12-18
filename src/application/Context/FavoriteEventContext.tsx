import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EventItem} from '@infra/features/queries/useQueryEvents';

const KEY_STORAGE = 'favoriteEvents';

interface FavoriteEventsContextProps {
  favoriteEvents: EventItem[];
  addFavoriteEvent: (event: EventItem) => void;
  removeFavoriteEvent: (eventId: number) => void;
  clearFavoriteEvents: () => void;
}

const FavoriteEventsContext = createContext<
  FavoriteEventsContextProps | undefined
>(undefined);

export const FavoriteEventsProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [favoriteEvents, setFavoriteEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    loadFavoriteEvents();
  }, []);

  const loadFavoriteEvents = async () => {
    try {
      const storedEvents = await AsyncStorage.getItem(KEY_STORAGE);
      if (storedEvents) {
        setFavoriteEvents(JSON.parse(storedEvents));
      }
    } catch (error) {
      console.error('Error loading favorite events:', error);
    }
  };

  const saveFavoriteEvents = async (events: EventItem[]) => {
    try {
      await AsyncStorage.setItem(KEY_STORAGE, JSON.stringify(events));
    } catch (error) {
      console.error('Error saving favorite events:', error);
    }
  };

  const addFavoriteEvent = (event: EventItem) => {
    const updatedEvents = [...favoriteEvents, event];
    setFavoriteEvents(updatedEvents);
    saveFavoriteEvents(updatedEvents);
  };

  const removeFavoriteEvent = (eventId: number) => {
    const updatedEvents = favoriteEvents.filter(event => event.id !== eventId);
    setFavoriteEvents(updatedEvents);
    saveFavoriteEvents(updatedEvents);
  };

  const clearFavoriteEvents = () => {
    setFavoriteEvents([]);
    AsyncStorage.removeItem(KEY_STORAGE);
  };

  return (
    <FavoriteEventsContext.Provider
      value={{
        favoriteEvents,
        addFavoriteEvent,
        removeFavoriteEvent,
        clearFavoriteEvents,
      }}>
      {children}
    </FavoriteEventsContext.Provider>
  );
};

export const useFavoriteEvents = (): FavoriteEventsContextProps => {
  const context = useContext(FavoriteEventsContext);
  if (!context) {
    throw new Error(
      'useFavoriteEvents must be used within a FavoriteEventsProvider',
    );
  }
  return context;
};
