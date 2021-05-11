import React from 'react';
import PropTypes from 'prop-types';
import {Card, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {notPokemonFound} from '@constants/notPokemon';

const AppCard = ({item = notPokemonFound}) => {
  const {name, sprites, types = [], weight, height, species} = item;

  const imgUrl =
    (sprites && sprites.other['official-artwork'].front_default) || '';

  return (
    <Card elevation={100}>
      <Card.Title
        title={name}
        subtitle={types.map(e => e.type.name).join(', ')}
      />
      <Card.Cover
        source={{
          uri: imgUrl,
        }}
      />
      <Card.Content style={styles.content}>
        <Text>Weight: {weight}</Text>
        <Text>Height: {height}</Text>
        <Text>Species: {species.name}</Text>
      </Card.Content>
    </Card>
  );
};

AppCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.object,
    order: PropTypes.string,
    weight: PropTypes.number,
    height: PropTypes.number,
    species: PropTypes.object,
  }),
};

const styles = StyleSheet.create({
  content: {marginTop: 10},
});

export default AppCard;
