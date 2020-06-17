import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Layout, Menu, MenuItem, Button } from '@ui-kitten/components';

const StarIcon = (props: any) => (
  <Icon {...props} name='star'/>
);

const ForwardIcon = (props: any) => (
  <Icon {...props} name='arrow-ios-forward'/>
);

const Menu_frame = ({ navigation }: any) => (
  <Layout>
    <View>
    {/* <Button onPress={() => navigation.navigate('Home')}>
      Home
    </Button> */}
      <Menu>
        <MenuItem
          title='Account'
          accessoryLeft={StarIcon}
          accessoryRight={ForwardIcon}
          onPress={() => navigation.navigate('Account')}
        />
        <MenuItem
          title='Decks'
          accessoryLeft={StarIcon}
          accessoryRight={ForwardIcon}
          onPress={() => navigation.navigate('Deck')}
        />
        <MenuItem
          title='Cards'
          accessoryLeft={StarIcon}
          accessoryRight={ForwardIcon}
          onPress={() => navigation.navigate('Card')}
        />
      </Menu>
    </View>
  </Layout>
);

export default Menu_frame;