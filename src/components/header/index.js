import React from 'react';
import {Appbar} from 'react-native-paper';

import {general} from '@constants/texts';

const Header = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title={general.appTitle} subtitle={general.appSubtitle} />
    </Appbar.Header>
  );
};

export default Header;
