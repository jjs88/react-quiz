import React from 'react';

const button = (props) => {
  const { text, styles } = props;
  return (
    <button style={styles}>{text}</button>
  )
}

export default button;