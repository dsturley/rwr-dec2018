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
      Why should I care?
    </Heading>
    <Appear>
      <List textColor="tertiary">
        <ListItem margin="20px 0 0">It's the right thing to do</ListItem>
        <Appear>
          <ListItem margin="10px 0 0" bold>It's not that hard</ListItem>
        </Appear>
      </List>
    </Appear>
  </Slide>
)
