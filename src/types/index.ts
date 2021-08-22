import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type Breakpoints = 'sm' | 'md' | 'lg' | 'xlg' | 'max';
export type BreakpointLength = {min: number; max: number};
export type BreakpointEntries = [Breakpoints, BreakpointLength][];

export type Media = Record<Breakpoints, {min: boolean; max: boolean}> & {current: string};

export type Scale = {width: number; height: number; font: number};

export type Orientation = 'horizontal' | 'vertical';

export type ResponsiveFont = (value: number) => number;
export type ResponsiveWidth = (value: number) => number;
export type ResponsiveHeight = (value: number) => number;
export type ResponsiveStyle = {rw: ResponsiveFont; rh: ResponsiveHeight; rf: ResponsiveFont};

export type Styles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export type StylesFunction<T> = (params: ResponsiveStyle) => T;
