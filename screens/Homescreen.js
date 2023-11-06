import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

export default function Homescreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'}/>
      <View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: 'white',
  },

 
});
