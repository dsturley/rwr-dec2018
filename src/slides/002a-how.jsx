import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

export default (
  <Slide bgColor="primary">
    <Heading size={4} fit caps lineHeight={1} textColor="secondary">
      How do I know if my site is accessible?
    </Heading>
    <Appear>
      <List textColor="tertiary">
        <ListItem margin="20px 0 0">Perceivable</ListItem>
        <Appear>
          <ListItem margin="10px 0 0">Operable</ListItem>
        </Appear>
        <Appear>
          <ListItem margin="10px 0 0">Understandable</ListItem>
        </Appear>
        <Appear>
          <ListItem margin="10px 0 0">Robust</ListItem>
        </Appear>
      </List>
    </Appear>
  </Slide>
)
