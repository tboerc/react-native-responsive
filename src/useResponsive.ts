import {useCallback, useContext} from 'react';
import {PixelRatio} from 'react-native';

import Context, {ContextType} from './context';

const useResponsive = () => {
  const {scale, ...context} = useContext(Context) as ContextType;

  const rw = useCallback(
    (value: number) => {
      return PixelRatio.roundToNearestPixel(value * scale.width);
    },
    [scale.width],
  );

  const rh = useCallback(
    (value: number) => {
      return PixelRatio.roundToNearestPixel(value * scale.height);
    },
    [scale.height],
  );

  const rf = useCallback(
    (value: number) => {
      return PixelRatio.roundToNearestPixel(value * scale.font);
    },
    [scale.font],
  );

  return {...context, rf, rw, rh};
};

export default useResponsive;
