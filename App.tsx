import { enableScreens } from 'react-native-screens';
enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Platform, StatusBar, Text, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { background } from './src/tokens';

const DM_MONO_FONT_FAMILY = Platform.select({
  ios: 'DMMono-Regular',
  android: 'DMMono-Regular',
  default: 'DMMono-Regular',
});

(Text as any).defaultProps = (Text as any).defaultProps ?? {};
(Text as any).defaultProps.style = [
  { fontFamily: DM_MONO_FONT_FAMILY },
  (Text as any).defaultProps.style,
];

(TextInput as any).defaultProps = (TextInput as any).defaultProps ?? {};
(TextInput as any).defaultProps.style = [
  { fontFamily: DM_MONO_FONT_FAMILY },
  (TextInput as any).defaultProps.style,
];

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={background.base} />
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
