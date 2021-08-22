# react-native-responsive

A small library that provides a Hook to make your UI fully responsive.

## Features

- Provides functions based on a scalable unit;
- Will update with screen size changes;
- Uses Context and Hooks API.

## Installation

```bash
yarn add @tboerc/react-native-responsive
# or npm i @tboerc/react-native-responsive
```

## Usage

- The package will detects the device width and height, and with that, generate a scale unit that basicly works like a "percentage". But insted of divide the screen size by 100, it will divide by 1000, so you can have more precise control of the sizes;

- All the values and functions can be accessed through the `useResponsive` hook;

- The `useResponsive` hook can receive a function created by the embedded `StyleSheet.create()`, and after that, it returns the parsed `styles` object to be used in the screen;

- The package exports a custom `StyleSheet` with some modifications in the `create` method to use the `rf, rh, rw` functions.

- The values are shared using Context API, so remember to wrap your application with `<ResponsiveProvider />`

## Example

```javascript
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {StyleSheet, useResponsive, ResponsiveProvider} from '@tboerc/react-native-responsive';

// Create a StyleShet using StyleSheet interface from @tboerc/react-native-responsive
// It works like default React Native StyleSheet, but provide some helpers functions
const s = StyleSheet.create(({rw}) => ({
  box: {
    width: rw(100),
    height: rw(100),
    backgroundColor: 'orange',
  },
}));

const Foo = () => {
  // Pass the s function returned from StyleSheet through the Hook, so it will provide the required
  // Function that was previusly used, like the rw function
  const {width, height, media, orientation, styles} = useResponsive(s);

  return (
    <SafeAreaView>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <Text>Orientation: {orientation}</Text>
      <Text>Current breakpoint: {media.current}</Text>

      <View style={styles.box} />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    // Remeber to wrap your app with ResponsiveProvider
    <ResponsiveProvider>
      <Foo />
    </ResponsiveProvider>
  );
};

export default App;
```

## API

### ResponsiveProvider

You should add `ResponsiveProvider` in your app root component.
Note that providers should not be inside a View that is animated with Animated or inside a ScrollView since it can cause very frequent updates.

### useResponsive(styles?)

Returns all values of the provider. If there is a style function created from the custom StyleSheet as parameter, it will pass the functions to be used.

Object with `{ width: number, height: number, media: object, orientation: string, styles?: object, rf: function, rh: function, rw: function }`.

#### rw(value: number)

Multiply the provided value by the device width divided by 1000 (value \* width / 1000). It uses `PixelRatio` to round the value to the nearest pixel.

#### rh(value: number)

Multiply the provided value by the device height divided by 1000 (value \* height / 1000). It uses `PixelRatio` to round the value to the nearest pixel.

#### rf(value: number)

Multiply the provided value by the device width or height, it will use the bigger, divided by 1000 (value \* (width > height ? width : height) / 1000). If the division result where less than 1, it will use 1 insted, so the `fontSize` will never be smaller than the provided value. It uses `PixelRatio` to round the value to the nearest pixel.

## Example

```bash
git clone https://github.com/tboerc/react-native-responsive.git
cd react-native-responsive/example
yarn # or npm i
yarn ios / yarn android # or npm run ios / npm run android
```
