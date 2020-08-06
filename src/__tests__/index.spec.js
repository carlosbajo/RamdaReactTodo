import React from 'react';
import App from '../App';
import ReactDOM from 'react-dom';
import {render, fireEvent} from '@testing-library/react';


const setup = () => {
    const utils = render(<App />);
    const input = utils.getByPlaceholderText('write an item!');
    return {
        input,
        ...utils
    };
};


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('render a new value when write on input', () => {
    const { input } = setup();
    fireEvent.change(input, {target: {value: 'hello world'}});
    const current = input.value;
    const expected = 'hello world';
    expect(current).toBe(expected);
});

it('render a new element when the button is fired', () => {
    
});
