import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CardList from '@components/cardList';
import Header from '@components/header';
import InputText from '@components/input-text';
import Loading from './components/loading';
import {pokeFetch} from '@utils/pokeFetch';
import {pokeRandomName} from '@utils/pokeRandomName';

function PokedexApp() {
  const name = pokeRandomName();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pokemonName, setPokemonName] = useState(name);

  useEffect(() => {
    pokeFetch(pokemonName)
      .then(response => setData([...data, response]))
      .finally(() => {
        setLoading(false);
      });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName]);

  return (
    <View style={styles.container}>
      <Header />
      <InputText setPokemonName={setPokemonName} pokemonName={pokemonName} />
      {isLoading ? <Loading /> : <CardList pokemons={data} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PokedexApp;
