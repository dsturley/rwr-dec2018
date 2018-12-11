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

export default (
  <Slide bgColor="primary" textColor="secondary">
    <Heading size={3} bold fit caps textColor="tertiary">
      Resources
    </Heading>
    <List textColor="tertiary">
      <ListItem margin="20px 0 0"><a href="https://www.w3.org/WAI/WCAG21/Understanding/">Understanding WCAG</a></ListItem>
      <ListItem margin="20px 0 0"><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a></ListItem>
      <ListItem margin="20px 0 0"><a href="https://developers.google.com/web/updates/2018/01/devtools#a11y">Chrome Accessibility DevTools</a></ListItem>
      <ListItem margin="20px 0 0"><a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US">aXe Chrome extension</a></ListItem>
    </List>
  </Slide>
)
