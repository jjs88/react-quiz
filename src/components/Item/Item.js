import React from 'react';
import { toggleFavorite } from '../../store/actions/items';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const item = (props) => {
  const { 
    image:imgUrl,
    id,
    favorite
  } = props.item;

  const price = props.item.price ? props.item.price: null; 
  const classes = favorite ? 'fas fa-heart Item__favorite fav': 'far fa-heart Item__favorite';

  return (
      <div className="Item">
        <NavLink to={`/items/${id}`}>
          <img src={imgUrl}/>
        </NavLink>
        <p className="Item__price">{price ? price.amounts.USD: null}</p>
        <span className={classes} onClick={() => props.toggleFavorite(id)}></span>
      </div>
  )
}

export default connect(null, { toggleFavorite })(item);