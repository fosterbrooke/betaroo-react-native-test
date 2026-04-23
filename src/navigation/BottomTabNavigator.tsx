import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import { LeaguesScreen } from '../screens/LeaguesScreen';
import { HomeScreen } from '../screens/HomeScreen';
import * as tokens from '../tokens';

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
    <Text style={{ fontSize: TAB_ICON_FONT_SIZE, opacity: focused ? 1 : 0.5 }}>
      {icons[label] ?? '●'}
    </Text>
  );
}

const TAB_ICON_FONT_SIZE = 20;
const TAB_LABEL_FONT_SIZE = 11;

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tokens.bg_base,
          borderTopColor: tokens.colors.slate[800],
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: tokens.colors.green[400],
        tabBarInactiveTintColor: tokens.colors.slate[400],
        tabBarLabelStyle: {
          fontSize: TAB_LABEL_FONT_SIZE,
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
