import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

export default function Menu_frame() {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <BottomNavigationTab title='ACCOUNT' />
      <BottomNavigationTab title='CATEGORIES' />
      <BottomNavigationTab title='DECKS' />
      <BottomNavigationTab title='CARDS' />
    </BottomNavigation>
  );
};