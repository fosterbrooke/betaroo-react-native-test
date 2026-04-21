import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import { LeaguesScreen } from '../screens/LeaguesScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { background, border, fontSize, state, text } from '../tokens';

export type RootTabParamList = {
  Home: undefined;
  Leagues: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  const icons: Record<string, string> = {
    Home: '🏠',
    Leagues: '🏆',
  };
  return (
    <Text style={{ fontSize: fontSize[20], opacity: focused ? 1 : 0.5 }}>
      {icons[label] ?? '●'}
    </Text>
  );
}

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: background.primary,
          borderTopColor: border.subtle,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: state.success.dark,
        tabBarInactiveTintColor: text.secondary,
        tabBarLabelStyle: {
          fontSize: fontSize[11],
          fontWeight: '500',
          marginBottom: 2,
        },
        tabBarIcon: ({ focused }) => (
          <TabIcon label={route.name} focused={focused} />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Leagues"
        component={LeaguesScreen}
        options={{ title: 'Leagues' }}
      />
    </Tab.Navigator>
  );
}
