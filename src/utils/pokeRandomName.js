import {pokeListNames} from '@constants/pokeListNames';

export const randomPosition = function (list) {
  return list[Math.floor(Math.random() * list.length + 1)];
};

export const pokeRandomName = () => {
  const pokemon = randomPosition(pokeListNames);
  if (!pokemon) {
    return 'pikachu';
  }
  return pokemon.name;
};
