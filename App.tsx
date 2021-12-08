import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Rootstack from './Navigation/RootStack';
import { LogBox } from 'react-native'; 

LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Rootstack />
  );
}

