import {Breakpoints, BreakpointLength} from '../types';

const breakpoints: Record<Breakpoints, BreakpointLength> = {
  sm: {min: 0, max: 595},
  md: {min: 595, max: 768},
  lg: {min: 768, max: 890},
  xlg: {min: 890, max: 1200},
  max: {min: 1200, max: Infinity},
};

export default breakpoints;
