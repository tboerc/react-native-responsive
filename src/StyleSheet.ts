import {StyleSheet} from 'react-native';

import {Styles, StylesFunction} from './types';

export const compose = StyleSheet.compose;
export const flatten = StyleSheet.flatten;
export const absoluteFill = StyleSheet.absoluteFill;
export const hairlineWidth = StyleSheet.hairlineWidth;
export const absoluteFillObject = StyleSheet.absoluteFillObject;

export const create = <T extends Styles<T> | Styles<any>>(styles: StylesFunction<T | Styles<T>>) => styles;
