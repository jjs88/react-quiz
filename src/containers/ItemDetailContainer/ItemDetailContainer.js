import React from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import ItemDetailHeader from '../../components/ItemDetail/ItemDetailHeader/ItemDetailHeader';
import { connect } from 'react-redux';

const itemDetailContainer = (props) => {
  const { id } = props.match.params;
  const [item] = props.items.filter(item => item.id === id);
  //fetch from API
  



 //destructure item
  const {
    description,
    creators,
    title,
    measurements,
    image,
    seller: {
      company
    }
  } = item;

  return (
    <div className="ItemDetailContainer">
      <ItemDetailHeader company={company}/>
      <ItemDetail item={item}/>
    </div>
  )
}

function mapStateToProps({items}) {
  return { items };
}

export default connect(mapStateToProps)(itemDetailContainer);