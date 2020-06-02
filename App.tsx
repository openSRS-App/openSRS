import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Home_frame from './components/Home_frame/Home_frame';
import FlashCard_frame from './components/FlashCard_frame/FlashCard_frame';



export default () => (
  <>
  <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Home_frame />
      {/* <FlashCard_frame /> */}
    </ApplicationProvider>
  </>
);
