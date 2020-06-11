import React from 'react';
import withCounter from '../HOC/withCounterHOC';
import './buttons.css';

function Buttons(props){
    const { count, incrementCount } = props;
    return (
        <button onClick={incrementCount}>Clicked { count } times</button>
    )
}

export default withCounter(Buttons);