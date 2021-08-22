import React from 'react';
import {ResponsiveProvider} from '../../dist';

import Foo from './pages/foo';

const App = () => {
  return (
    <ResponsiveProvider>
      <Foo />
    </ResponsiveProvider>
  );
};

export default App;
