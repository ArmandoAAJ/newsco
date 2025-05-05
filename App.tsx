import { Home } from './src/screens/home';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SvgInicioComponent } from './src/assets/svg/inicio';
const Tab = createBottomTabNavigator();

const Profile = () => <></>;

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#0b0d10',
              borderColor: '#0b0d10',
              zIndex: 1,
            },
            sceneStyle: {
              backgroundColor: '#0b0d10',
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => <SvgInicioComponent />,
              tabBarLabelStyle: {
                color: '#FFF',
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: () => <SvgInicioComponent />,
              tabBarLabelStyle: {
                color: '#FFF',
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
