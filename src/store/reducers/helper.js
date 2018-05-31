export const toggleFavorite = (state, id) => {
  const item = state.find(item => item.id === id);
  const pos = state.findIndex(item => item.id === id);
  const val = state[pos].favorite ? false:true;
  const modItem = {
    ...item,
    favorite: val
  }
  //this works because an array is really an object
  //override the object at position x
  //return new array with copy of the state, but modifying position x
  //properties in the target will get overriden by properties in the source
  //get the position and modify the value
  return Object.assign([...state], {[pos]: modItem});
}