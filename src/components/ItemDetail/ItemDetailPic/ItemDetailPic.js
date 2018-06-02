import React from 'react';

const itemDetailPic = (props) => {
  const { image } = props;
  return (
    <div className="ItemDetailPic">
      <img src={image} />
    </div>
  )
}

export default itemDetailPic;