import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import PokedexApp from './src/PokeDexApp';

function App() {
  return (
    <SafeAreaView>
      <PaperProvider>
        <Text>Hands up</Text>
        <PokedexApp />
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
