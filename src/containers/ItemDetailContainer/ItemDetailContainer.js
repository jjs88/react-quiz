import React, { Component } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import ItemDetailHeader from '../../components/ItemDetail/ItemDetailHeader/ItemDetailHeader';
import axios from 'axios';

class ItemDetailContainer extends Component {
  state = {
    item: null
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    //fetch from API
    const { data:item } = await axios(`/item/${id}`);
    axios.post('/item/post', {id});
    this.setState({item});
  }

  render() {
    if(!this.state.item) return null;
    // //destructure item
    const {
      description,
      creators,
      title,
      measurements,
      image,
      seller: {
        company
      }
    } = this.state.item;

    return (
      <div className="ItemDetailContainer">
        <ItemDetailHeader company={company}/>
        <ItemDetail item={this.state.item}/>
      </div>
    )
  }
}
  



export default ItemDetailContainer;