import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

export default function Menu_frame({ navigation }: any) {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <BottomNavigationTab title='ACCOUNT' onPress={() => navigation.navigate('Account')} />
      {/* <BottomNavigationTab title='CATEGORIES' onPress={() => navigation.navigate('Deck')}/> */}
      <BottomNavigationTab title='DECKS' onPress={() => navigation.navigate('Deck')} />
      <BottomNavigationTab title='CARDS' onPress={() => navigation.navigate('Card')} />
    </BottomNavigation>
  );
};