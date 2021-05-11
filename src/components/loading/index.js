import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default loading;
