
// Import React Native stuff
import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing Components
import Home_frame from './components/Home_frame/Home_frame';
import Cards_frame from './components/Cards_frame/Cards_frame';
import AddCard_frame from './components/Cards_frame/AddCard_frame';
import Deck_frame from './components/Deck_frame/Deck_frame';
import FlashCard_frame from './components/FlashCard_frame/FlashCard_frame'
import Login_frame from './components/Login_frame/Login_frame';
import Menu_frame from './components/Menu_frame/Menu_frame'
import Account_frame from './components/Account_frame/Account_frame'
// Importing Eva stuff
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Stack = createStackNavigator();

function App({ navigation }: any) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name="Home" component={Home_frame} options={({navigation}) => ({headerRight: () => (
              <Text
                style={{padding:'25%', fontSize:18,fontWeight:'500', color:'black'}}
                onPress={() => navigation.navigate('Card')}>Menu</Text>
                ),
              })}
              />
            <Stack.Screen name="Menu" component={Menu_frame} />
            <Stack.Screen name="Card" options={{title:' Home'}} component={Cards_frame} />
            <Stack.Screen name="Deck" component={Deck_frame} />
            <Stack.Screen name="FlashCard" options={{title:' Home'}} component={FlashCard_frame} />
            <Stack.Screen name="Login" component={Login_frame} />
            <Stack.Screen name="Account" component={Account_frame} />
            <Stack.Screen name="AddCard" options={{title:'Menu'}} component={AddCard_frame} />

          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

export default App;

