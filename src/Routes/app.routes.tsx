import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContainerTitle, TitleApp } from './styles';
import theme from '../Global/Styles/theme';
import GetStarted from '../Pages/GetStarted';
import BottonGoBack from '../Components/ComponetsCreateds/BottonGoBack';
import Home from '../Pages/Home';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="GetStarted" 
        component={GetStarted} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerStyle: {
            backgroundColor: theme.colors.Blue_01,
          },
          headerBackVisible: false,
          headerShadowVisible: true,
          headerTitleAlign: 'center',
          headerTitle: () => 
            <ContainerTitle>
              <TitleApp>App Fronteiras</TitleApp>
            </ContainerTitle>,
        }}
      />
    </Stack.Navigator>
  )
}
