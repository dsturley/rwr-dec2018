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

const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div
        className="button"
        onClick={() => setOpen(!open)}
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setOpen(!open);
          }
        }}
      >Menu</div>
      {open && (
        <div className="result">
          I am open!
        </div>
      )}
    </Fragment>
  );
}

export default (
  <Slide bgColor="secondary" textColor="primary">
    <div>
      <CodePane source={require('!raw-loader!./examples/005/keydown.example')} lang="jsx" margin="20px auto" />
      <Example />
    </div>
  </Slide>
)
