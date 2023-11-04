import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

export default function Homescreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Homescreen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1, // Set flex to 1 for the container
    justifyContent: 'center',
    alignItems: 'center',
  },
});
