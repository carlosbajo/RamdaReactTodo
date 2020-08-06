import React, { useState } from 'react';
import "./styles.css";
import List from "./components/List";
import Input from "./components/Input";
import { append, compose, prop, remove } from 'ramda';
// Simple tests with ramnda an functiona programing

const useInput = (initial='') => {
    const [inputValue, setInputValue] = useState(initial);

    const valueFromInput = compose(prop('value'),prop('target'));
    const updateInput = e => setInputValue(valueFromInput(e));
    const clearInput = () => setInputValue('');
    return [inputValue, updateInput, clearInput];
};


const App = () => {
  const [items, updateItems] = useState([]);
  const [inputValue, updateInput, clearInput] = useInput("");

  const saveItem = () =>
    compose(
      clearInput,
      updateItems,
      append
    )(inputValue, items);
  const deleteItem = index => updateItems(remove(index, 1, items));

  return (
    <div className="App">
      <Input 
        value={inputValue} 
        onChange={updateInput} 
        placeholder="write an item!" />
      <button onClick={saveItem}>Save</button>
      <List items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
