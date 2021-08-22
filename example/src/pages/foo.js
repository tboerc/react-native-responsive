import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {StyleSheet, useResponsive} from '../../../dist';

const s = StyleSheet.create(({rw}) => ({
  box: {
    width: rw(100),
    height: rw(100),
    backgroundColor: 'orange',
  },
}));

const Foo = () => {
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

export default Foo;
