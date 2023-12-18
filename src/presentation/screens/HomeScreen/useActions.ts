import {useMemo} from 'react';
import {useSearch} from '@app/Context/SearchContext';
import {useQueryEvents} from '@infra/features/queries/useQueryEvents';

const formatQueryParam = (qs: string) => qs.trim().toLowerCase().trim();

export const useActions = ({page}: {page: number}) => {
  const {searchQuery} = useSearch();
  const queryEvents = useQueryEvents({
    limit: 20,
    page,
  });

  const events = useMemo(() => {
    if (!!searchQuery.trim() && queryEvents?.data?.data?.length > 0) {
      return queryEvents.data.data.filter(event =>
        formatQueryParam(event.title).includes(formatQueryParam(searchQuery)),
      );
    }
    return queryEvents?.data?.data ?? [];
  }, [searchQuery, queryEvents]);

  return {
    queryEvents,
    events,
  };
};
