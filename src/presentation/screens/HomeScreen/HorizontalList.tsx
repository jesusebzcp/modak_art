import React, {useMemo} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';

import {AppText, Separator} from '@pr/components';
import {METRICS} from '@pr/theme/metrics';
import {COLORS} from '@pr/theme';

type HorizontalListProps<T> = {
  headerProps: {
    title: string;
    textCallToAction: string;
    onAction(): void;
  };
  renderItem: ListRenderItem<T> | null | undefined;
  keyExtractor: ((item: T, index: number) => string) | undefined;
  data: T[];
};

export const HorizontalList: <
  T,
>({}: HorizontalListProps<T>) => React.ReactElement = ({
  headerProps,
  renderItem,
  data,
  keyExtractor,
}) => {
  const ListEmptyComponent = useMemo(() => {
    return (
      <View style={styles.listEmptyComponent}>
        <AppText.H6 color={COLORS.text_dark}>{'No Data'}</AppText.H6>
      </View>
    );
  }, []);

  return (
    <>
      <Separator />
      <View style={styles.header}>
        <AppText.H3 weight="BOLD" color={COLORS.text_dark}>
          {headerProps.title}
        </AppText.H3>
        <TouchableOpacity onPress={headerProps.onAction}>
          <AppText.H5 color={COLORS.text_dark}>
            {headerProps.textCallToAction}
          </AppText.H5>
        </TouchableOpacity>
      </View>
      <Separator />
      <FlatList
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        bounces
        ListEmptyComponent={ListEmptyComponent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: METRICS.spacingHorizontal,
  },
  list: {
    paddingLeft: METRICS.spacingHorizontal,
    marginBottom: 10,
  },
  listEmptyComponent: {
    flex: 1,
    justifyContent: 'center',
    width: METRICS.screenWidth,
    alignItems: 'center',
  },
});
