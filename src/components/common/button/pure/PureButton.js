import React from 'react';

function PureButton(props) {
  return (
    <span {...props} className={props.className}>{props.children}</span>
  );
}

export default PureButton;