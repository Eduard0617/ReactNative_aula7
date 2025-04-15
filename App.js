import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './componentes/Login';
import HomeScreen from './componentes/Home';
import RegistroScreen from './componentes/Registro';
import PerfilScreen from './componentes/Perfil';
import SplashScreen from './SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name= "Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name= "Registro" component={RegistroScreen} />
        <Stack.Screen name= "Home" component={HomeScreen} options={{ headerLeft: () => null }} />
        <Stack.Screen name= "Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
