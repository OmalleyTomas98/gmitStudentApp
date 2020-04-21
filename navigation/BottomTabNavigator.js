import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Nightlife from '../screens/Nightlife';
import Calendar from '../screens/Calendar';
import Forums from '../screens/Forums';
import Rent from '../screens/Rent';
import Signup from '../screens/Signup';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home ID"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: 'Calendar',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-calendar" />,
        }}
      />
         <BottomTab.Screen
        name="Forums"
        component={Forums}
        options={{
          title: 'Student Forums',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-paper" />,
        }}
      />
       <BottomTab.Screen
        name="Accomodation"
        component={Rent}
        options={{
          title: 'Accomodation',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
         <BottomTab.Screen
        name="Nightlife"
        component={Nightlife}
        options={{
          title: 'Nightlife',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-beer" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home ID':
      return 'GMIT Student App';
    case 'Links':
      return 'Links to learn more';
    case 'Events':
        return 'How to get started';
    case 'Nightlife':
        return 'Galway Nightlife';
    case 'Accomodation':
        return 'Student Accomodation';
    case 'Calendar':
        return 'Calendar';
    case 'Forums':
        return 'Student Forum';
        
  }
}
