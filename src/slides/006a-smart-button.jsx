/* eslint-disable import/no-webpack-loader-syntax */
import React, { Fragment, useState } from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Code,
  CodePane,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import SmartButton from '../components/smart-button';

export default (
  <Slide bgColor="secondary" textColor="primary">
    <Text bold textColor="primary" size={4}>Semantics!</Text>
    <CodePane source={require('!raw-loader!./examples/006/component.example')} lang="jsx" margin="20px auto" />
  </Slide>
)
