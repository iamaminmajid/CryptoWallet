import React from 'react';
import type {Node} from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


import {
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './screens/HomeScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faUser, faRocket, faBarcode } from '@fortawesome/free-solid-svg-icons'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  


  return (
    
      
          <NavigationContainer>
          
            <Tab.Navigator tabBarOptions={{
              activeTintColor: '#1a4aba',
            }}>
                
              <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (<FontAwesomeIcon icon={ faHome } color={color}/>)
                
              }}/>
                  
              <Tab.Screen name="Scan" component={ProfileScreen} options={{
                tabBarLabel: 'Scan',
                tabBarIcon: ({color}) => (<FontAwesomeIcon icon={ faBarcode } color={color} size="22"/>)
                
              }}/>
                
                <Tab.Screen name="Settings" component={ProfileScreen} options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({color}) => (<FontAwesomeIcon icon={ faUser } color={color} />)
                  
                }}/>

            </Tab.Navigator>
            
          </NavigationContainer>
          
  );
};


export default App;
