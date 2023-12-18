import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

import {COLORS} from '@pr/theme';
import {METRICS} from '@pr/theme/metrics';
import {AppText, Separator, AppInput} from '@pr/components';
import {useSearch} from '@app/Context/SearchContext';

import {SvgNotifications} from './SvgNotifications';
import {SvgMenuBurger} from './SvgMenuBurger';
import {SvgSearch} from './SvgSearch';

type HeaderProps = {
  onMenuBurger(): void;
  onNotifications(): void;
};

export const Header = ({onMenuBurger, onNotifications}: HeaderProps) => {
  const {searchQuery, setSearchQuery} = useSearch();
  return (
    <View style={styles.hero}>
      {/* Navigation */}

      <View style={styles.header}>
        <TouchableOpacity onPress={onMenuBurger}>
          <SvgMenuBurger />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNotifications}>
          <SvgNotifications />
        </TouchableOpacity>
      </View>
      {/* Title */}
      <Separator />
      <AppText.H1>{'Find'}</AppText.H1>
      <AppText.H1 weight="BOLD" color={COLORS.primary}>
        {'Treading Events'}
      </AppText.H1>
      <Separator />
      {/* Search */}
      <AppInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        ph={'Search Event...'}
        iconRight={
          <View style={styles.iconSearch}>
            <SvgSearch />
          </View>
        }
        nativeProps={{
          keyboardType: 'web-search',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    paddingHorizontal: METRICS.spacingHorizontal,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 34,
  },
  iconSearch: {
    paddingHorizontal: 10,
  },
});
