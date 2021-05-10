import React from 'react';
import {StyleSheet, View} from 'react-native';

import CardList from '@components/cardList';
import Header from '@components/header';

function PokedexApp() {
  return (
    <View style={styles.container}>
      <Header />
      <CardList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PokedexApp;
