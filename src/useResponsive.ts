import {useCallback, useContext, useMemo} from 'react';
import {PixelRatio} from 'react-native';

import Context, {ContextType} from './context';
import {ResponsiveFont, ResponsiveHeight, ResponsiveWidth, Styles, StylesFunction} from './types';

const useResponsive = <T extends Styles<T> | Styles<any>>(styles?: StylesFunction<T | Styles<T>>) => {
  const {scale, ...context} = useContext(Context) as ContextType;

  const rw: ResponsiveWidth = useCallback(
    (value: number) => {
      return PixelRatio.roundToNearestPixel(value * scale.width);
    },
    [scale.width],
  );

  const rh: ResponsiveHeight = useCallback(
    (value: number) => {
      return PixelRatio.roundToNearestPixel(value * scale.height);
    },
    [scale.height],
  );

  const rf: ResponsiveFont = useCallback(
    (value: number) => {
      return PixelRatio.roundToNearestPixel(value * scale.font);
    },
    [scale.font],
  );

  const s = useMemo(() => {
    if (typeof styles === 'function') {
      return styles({rw, rh, rf});
    }
  }, [rf, rh, rw, styles]);

  return {...context, rf, rw, rh, styles: s};
};

export default useResponsive;
