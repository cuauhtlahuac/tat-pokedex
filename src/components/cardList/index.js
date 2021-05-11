import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import AppCard from '@components/card';

const CardList = ({pokemons}) => {
  const horizontalMargin = 50;
  const slideWidth = 150;
  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = slideWidth + horizontalMargin * 2;

  return (
    <View style={styles.container}>
      <Carousel
        data={pokemons.reverse()}
        renderItem={AppCard}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        layout="default"
        slideStyle={styles.slideStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideStyle: {
    justifyContent: 'center',
  },
});

export default CardList;
