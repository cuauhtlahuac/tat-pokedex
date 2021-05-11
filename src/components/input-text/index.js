import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import {general} from '@constants/texts';
import {pokeRandomName} from '@utils/pokeRandomName';

const InputText = ({pokemonName, setPokemonName}) => {
  const [text, setText] = useState('');
  const [name, setName] = useState(pokeRandomName());

  const handlerPokemonName = () => {
    setPokemonName(text + '');
  };

  const getPokeRandomName = () => {
    setName(pokeRandomName());
    setText('');
  };

  return (
    <TextInput
      style={styles.container}
      label={general.nameLabel}
      placeholder={`${name}?`}
      value={`${text}`}
      onChangeText={val => setText(val)}
      onSubmitEditing={handlerPokemonName}
      onBlur={getPokeRandomName}
    />
  );
};

InputText.propTypes = {
  pokemonName: PropTypes.string,
  setPokemonName: PropTypes.func,
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', borderRadius: 5, marginTop: 3},
});

export default InputText;
