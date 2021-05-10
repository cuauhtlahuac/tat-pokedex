import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const AppCard = props => {
  return (
    <Card elevation={2}>
      <Card.Title title="Hola" subtitle="Subtitle" />
      <Card.Cover
        source={{
          uri:
            'https://hobbymascotas.com/wp-content/uploads/2018/05/5-curiosidades-sobre-las-cotorras-hobby-mascotas.jpg',
        }}
      />
      <Card.Content>
        <Text>dokdokdop</Text>
      </Card.Content>
    </Card>
  );
};

AppCard.propTypes = {};

export default AppCard;
