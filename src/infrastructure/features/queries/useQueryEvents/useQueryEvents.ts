import {instanceAuthAxios} from '@infra/connection/axios';
import {useQuery} from '@tanstack/react-query';
import {EventsResponse, useQueryEventsProps} from './types';

const requestEvents = ({page}: {page: number}) =>
  instanceAuthAxios.get<any, EventsResponse>(`events?limit=10&page=${page}`);

export const useQueryEvents = ({limit = 10, page = 1}: useQueryEventsProps) => {
  return useQuery({
    queryFn: () => requestEvents({page}),
    queryKey: ['events', limit, page],
  });
};
