
import React from 'react';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#2F3336',
          borderTopWidth: 0.5,
          height: 60,
          paddingBottom: 7,
          paddingTop: 7,
        },
        tabBarActiveTintColor: '#1D9BF0',
        tabBarInactiveTintColor: '#71767B',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Text style={{ color, fontSize: size, fontWeight: focused ? 'bold' : 'normal' }}>
              ⌂
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>
              ●
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
