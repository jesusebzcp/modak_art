import {formatDate} from '@app/Utilities';
import {COLORS} from '@pr/theme';
import {METRICS} from '@pr/theme/metrics';
import React, {useMemo} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppText} from '../AppText';
import {Separator} from '../Separator';
import {SvgCalendar} from './SvgCalendar';
import {SvgLocation} from './SvgLocation';
import {SharedElement} from 'react-navigation-shared-element';
import Pinchable from 'react-native-pinchable';
import * as Animatable from 'react-native-animatable';
type CardEventProps = {
  variant?: 'primary' | 'secondary';
  title: string;
  location: string;
  start_date: string;
  image_url: string;
  onPress(): void;
  indexAnimation: number;
  width?: number;
};

export const CardEvent = ({
  variant = 'primary',
  location,
  start_date,
  title,
  image_url,
  onPress,
  indexAnimation = 1,
  width,
}: CardEventProps) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        primary: {
          height: METRICS.screenHeight * 0.3,
          width: width ? width : METRICS.screenWidth * 0.8,
          marginRight: 20,
          borderRadius: 12,
          position: 'relative',
        },
        secondary: {
          width: METRICS.screenWidth * 0.4,
          marginRight: 20,
          borderRadius: 12,
          backgroundColor: COLORS.text_light,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          paddingBottom: 15,
        },
        image_primary: {
          width: width ? width : METRICS.screenWidth * 0.8,
          height: METRICS.screenHeight * 0.3,
          borderRadius: 12,
        },
        image_secondary: {
          height: METRICS.screenHeight * 0.1,
          width: METRICS.screenWidth * 0.4,
          marginRight: 20,
          borderRadius: 12,
        },
        content_primary: {
          position: 'absolute',
          bottom: 15,
          right: 10,
          left: 10,
          padding: 5,
          borderRadius: 8,
          backgroundColor: COLORS.primary,
        },
        content_secondary: {
          padding: 10,
          width: METRICS.screenWidth * 0.4,
        },
        title_primary: {
          color: COLORS.text_light,
        },
        text_primary: {
          color: COLORS.text_light,
          marginLeft: 5,
        },

        text_secondary: {
          marginLeft: 8,
          color: COLORS.text_dark,
        },

        title_secondary: {
          color: COLORS.text_dark,
        },
        item: {
          flexDirection: 'row',
          alignItems: 'center',
        },
      }),
    [width],
  );

  return (
    <TouchableOpacity
      style={styles[variant]}
      activeOpacity={0.8}
      onPress={onPress}>
      <SharedElement id={image_url}>
        <Pinchable>
          <FastImage
            source={{
              uri: image_url,
            }}
            style={styles[`image_${variant}`]}
            resizeMode={FastImage.resizeMode.cover}
          />
        </Pinchable>
      </SharedElement>

      <Animatable.View
        delay={indexAnimation * 3}
        animation={'zoomInUp'}
        style={styles[`content_${variant}`]}>
        <SharedElement id={title}>
          <AppText.H6
            weight="BOLD"
            nativeProps={{
              numberOfLines: 1,
            }}
            style={styles[`title_${variant}`]}>
            {title}
          </AppText.H6>
        </SharedElement>

        <Separator size={3} />
        <View style={styles.item}>
          <SvgLocation
            color={variant === 'primary' ? COLORS.text_light : COLORS.secondary}
          />
          <AppText
            nativeProps={{
              numberOfLines: 1,
            }}
            style={styles[`text_${variant}`]}>
            {location}
          </AppText>
        </View>
        <Separator size={3} />
        <View style={styles.item}>
          <SvgCalendar
            color={variant === 'primary' ? COLORS.text_light : COLORS.secondary}
          />
          <AppText
            nativeProps={{
              numberOfLines: 1,
            }}
            style={styles[`text_${variant}`]}>
            {formatDate(start_date)}
          </AppText>
        </View>
      </Animatable.View>
    </TouchableOpacity>
  );
};
