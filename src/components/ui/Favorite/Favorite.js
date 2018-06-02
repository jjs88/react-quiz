import React from 'react';

const favorite = (props) => {
  let { classes, id, styles } = props;
  classes = ['Favorite', classes];
  return (
    <span className={classes.join(' ')} onClick={() => props.click(id)} style={styles}></span>
  )
}

export default favorite;