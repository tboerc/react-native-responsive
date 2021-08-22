import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {useResponsive} from '../../../dist';

const Foo = () => {
  const {width, height, media, orientation, rf, rw} = useResponsive();

  return (
    <SafeAreaView>
      <Text>{width}</Text>
      <Text>{height}</Text>
      <Text>{orientation}</Text>
      <Text>{media.current}</Text>

      <Text style={{fontSize: 18}}>Font Test Responsive</Text>
      <Text style={{fontSize: rf(18)}}>Font Test Responsive</Text>

      <View style={{width: rw(100), height: rw(100), backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
    </SafeAreaView>
  );
};

export default Foo;
