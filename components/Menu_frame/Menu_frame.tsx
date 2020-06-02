import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

// import Account_frame from './components/Menu_frame/Account_frame';
// import Categories_frame from './components/Menu_frame/Categories_frame';
// import Decks_frame from './components/Deck_frame/Decks_frame';
// import Cards_frame from './components/Card_frame/Cards_frame';


// Temporary placeholder for bottom navigation, more functionality
// will follow when other screens are completed
export default function Menu_frame() {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <BottomNavigationTab title='ACCOUNT'/>
      <BottomNavigationTab title='CATEGORIES'/>
      <BottomNavigationTab title='DECKS'/>
      <BottomNavigationTab title='CARDS'/>
    </BottomNavigation>
  );
};


// const { Navigator, Screen } = createBottomTabNavigator();



// const BottomTabBar = ({ navigation, state }: any) => (
//   <BottomNavigation
//     selectedIndex={state.index}
//     onSelect={index => navigation.navigate(state.routeNames[index])}>
//     <BottomNavigationTab title='ACCOUNT'/>
//     <BottomNavigationTab title='CATEGORIES'/>
//     <BottomNavigationTab title='DECKS'/>
//     <BottomNavigationTab title='CARDS'/>
//   </BottomNavigation>
// );

// const TabNavigator = () => (
//   <Navigator tabBar={props => <BottomTabBar {...props} />}>
//     <Screen name='Account' component={AccountScreen}/>
//     <Screen name='Categories' component={CategoriesScreen}/>
//     <Screen name='Decks' component={DecksScreen}/>
//     <Screen name='Cards' component={CardsScreen}/>
//   </Navigator>
// );

// export default function Menu_frame():any {
//   <NavigationContainer>
//     <TabNavigator/>
//   </NavigationContainer>
// };