import React from 'react';

const style = {
  appearance: 'none',
};

export default (props) => {
  if (!props.href) {
    return <button style={style} type="button" {...props} />;
  }

  return <a style={style} {...props} />;
};
