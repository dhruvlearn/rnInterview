import React from 'react';
import {Button, Text, StyleSheet, SafeAreaView} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.flex1}>
      <Text style={styles.note}>Settings</Text>
      <Button
        onPress={() => navigation.navigate('ProductsScreen')}
        title="Go to Products"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    marginBottom: 16,
    fontSize: 18,
  },
});

export default SettingsScreen;
