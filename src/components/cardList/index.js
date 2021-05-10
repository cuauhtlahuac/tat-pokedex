import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import AppCard from '@components/card';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

const CardList = () => {
  const horizontalMargin = 50;
  const slideWidth = 150;
  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = slideWidth + horizontalMargin * 2;

  return (
    <View style={styles.container}>
      <Carousel
        data={[1, 2, 3]}
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
