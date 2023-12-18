export const opacityColor = (color: string, opacity: number): string => {
  const hexWithoutOpacity = color.slice(0, 7);
  const alphaHex = Math.round(opacity * 255)
    .toString(16)
    .toUpperCase();

  if (alphaHex.length === 1) {
    return `${hexWithoutOpacity}0${alphaHex}`;
  }

  return `${hexWithoutOpacity}${alphaHex}`;
};
export const COLORS_LIGHT = {
  primary: '#761CBC',
  secondary: '#EC441E',
  text_light: '#fff',
  text_dark: '#385167',
  bg_screen: '#F7FBFD',
  gray: '#E0E0E0',
};

export const COLORS_DARK = {
  primary: '#761CBC',
  secondary: '#EC441E',
  text_light: '#fff',
  text_dark: '#385167',
  bg_screen: '#000',
  purple: '#EDE9FF',
  yellow: '#FFF5D7',
  green: '#E4FFEA',
  gray: '#E0E0E0',
};

export const COLORS = {...COLORS_LIGHT, opacityColor};
