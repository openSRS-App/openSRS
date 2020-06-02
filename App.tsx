import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
// import Home_frame from './components/Home_frame/Home_frame'
import Login_frame from './components/Login_frame/Login_frame'


export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    {/* <Home_frame /> */}
    <Login_frame />
  </ApplicationProvider>
);
