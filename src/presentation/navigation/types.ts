import {EventItem} from '@infra/features/queries/useQueryEvents';

export type MainStackParamList = {
  HOME?: {};
  EVENT_DETAIL?: {
    event: EventItem;
  };
  FAVORITE?: {};
  NOTIFICATIONS?: {};
};
