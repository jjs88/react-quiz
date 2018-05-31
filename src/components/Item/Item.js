import React from 'react';
import { toggleFavorite } from '../../actions/items';
import { connect } from 'react-redux';

const item = (props) => {
  const { 
    image:imgUrl,
    id,
    favorite
  } = props.item;
  
  const classes = favorite ? 'fas fa-heart Item__favorite fav': 'far fa-heart Item__favorite';

  return (
    <div className="Item">
      <img src={imgUrl}/>
      <p className="Item__price">$25,000</p>
      <span className={classes} onClick={() => props.toggleFavorite(id)}></span>
    </div>
  )
}

export default connect(null, { toggleFavorite })(item);