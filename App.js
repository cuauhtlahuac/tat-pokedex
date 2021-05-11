import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import PokedexApp from '@source/PokedexApp';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f1c40f',
    accent: '#f13333',
  },
};

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider theme={theme}>
        <PokedexApp />
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#eee'},
});

export default App;
