import React from 'react';
import { NavLink} from 'react-router-dom';

const itemDetailHeader = (props) => {
  return (
    <div className="ItemDetailHeader">
      <div className="ItemDetailHeader__link">
        <NavLink to="/">back</NavLink>
      </div>
      <h2>{props.company}</h2>
    </div>
  )
}

export default itemDetailHeader;