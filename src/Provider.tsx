import React, {ReactNode} from 'react';
import {useWindowDimensions} from 'react-native';

import Context from './context';
import breakpoints from './constants/breakpoints';
import {Media, Orientation, BreakpointEntries, Scale} from './types';

interface ProviderProps {
  children: ReactNode;
}

const getMedia = (width: number) => {
  const entries = Object.entries(breakpoints) as BreakpointEntries;

  let media = {} as Media;

  for (const [key, breakpoint] of entries) {
    media[key] = {min: width > breakpoint.min, max: width < breakpoint.max};

    if (media[key].min && media[key].max) {
      media.current = key;
    }
  }

  return media;
};

const getScale = (w: number, h: number): Scale => {
  const width = w / 1000;
  const height = h / 1000;
  const font = width > height ? width : height;
  return {width, height, font: font > 1 ? font : 1};
};

const Provider = ({children}: ProviderProps) => {
  const {width, height} = useWindowDimensions();

  const orientation: Orientation = width > height ? 'horizontal' : 'vertical';
  const media = getMedia(width);
  const scale = getScale(width, height);

  const value = {
    scale,
    media,
    width,
    height,
    orientation,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
