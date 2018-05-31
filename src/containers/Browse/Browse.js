import React from 'react';
import Items from '../Items/Items';
import Button from '../../components/ui/Button/Button';

const browse = (props) => {
  const btnStyles = {
    borderRadius: '25px',
    marginBottom: '10px',
    left: '45%',
    padding: '5px 30px',
    position: 'relative',
    color: 'red'
  }

  return (
    <div className="Browse">
      <Items />
      <Button styles={btnStyles} text="load more" />
    </div>
  )
}

export default browse;