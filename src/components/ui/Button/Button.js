import React from 'react';

const button = (props) => {
  const { text, styles, click, disabled } = props;
  return (
    <button disabled={disabled} className="Button" style={styles} onClick={() => click()}>{text}</button>
  )
}

export default button;