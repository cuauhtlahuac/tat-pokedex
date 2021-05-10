import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import PokedexApp from '@source/PokedexApp';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <PokedexApp />
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#222'},
});

export default App;
