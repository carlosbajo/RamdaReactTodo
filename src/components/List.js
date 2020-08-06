import React from "react";
import { map, addIndex } from "ramda";

const ListItem = ({ item, index, deleteItem }) => (
  <li key={index}>
    <button onClick={e => deleteItem(index)}>X</button>
     {item}
  </li>
);

const List = ({ items, deleteItem }) => {
  const itemToListItem = (item, index) => (
    <ListItem item={item} index={index} deleteItem={deleteItem} />
  );
  const indexedMap = addIndex(map);
  const liIfy = indexedMap(itemToListItem);
  const listItems = liIfy(items);
  return <ul>{listItems}</ul>;
};

List.defaultProps = {
  items: ["carlos", "bajo"]
};

export default List;
