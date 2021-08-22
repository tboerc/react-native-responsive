import {createContext} from 'react';

import {Media, Orientation, Scale} from './types';

export interface ContextType {
  media: Media;
  scale: Scale;
  width: number;
  height: number;
  orientation: Orientation;
}

const Context = createContext<ContextType | null>(null);

export default Context;
