import React, {useCallback, useState} from 'react';
import {View, StyleSheet, LayoutChangeEvent} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {formatDate} from '@app/Utilities';
import {AppText, Separator} from '@pr/components';
import {SvgCalendar} from '@pr/components/CardEvent/SvgCalendar';
import {SvgLocation} from '@pr/components/CardEvent/SvgLocation';
import {COLORS} from '@pr/theme';

const SPACING_HORIZONTAL = 20;

type InformationCardProps = {
  title: string;
  location: string;
  start_date: string;
};

export const InformationCard = ({
  title,
  location,
  start_date,
}: InformationCardProps) => {
  const [heightCard, setHeightCard] = useState(100);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) =>
      setHeightCard(event.nativeEvent.layout.height),
    [],
  );

  const styles = StyleSheet.create({
    card: {
      backgroundColor: COLORS.text_light,
      position: 'absolute',
      zIndex: 2,
      right: SPACING_HORIZONTAL,
      left: SPACING_HORIZONTAL,
      padding: 10,
      borderRadius: 12,
      bottom: -heightCard / 2,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textItem: {
      color: COLORS.text_dark,
      marginLeft: 10,
    },
  });

  return (
    <>
      <Animatable.View
        animation={'fadeInUpBig'}
        style={styles.card}
        onLayout={onLayout}>
        <AppText.H2
          weight="BOLD"
          color={COLORS.primary}
          nativeProps={{
            numberOfLines: 2,
          }}>
          {title}
        </AppText.H2>

        <Separator size={5} />

        <View style={styles.item}>
          <SvgLocation color={COLORS.primary} />
          <AppText.H5 style={styles.textItem}>{location}</AppText.H5>
        </View>
        <Separator size={5} />
        <View style={styles.item}>
          <SvgCalendar color={COLORS.primary} />
          <AppText.H5 style={styles.textItem}>
            {formatDate(start_date)}
          </AppText.H5>
        </View>
      </Animatable.View>
    </>
  );
};
