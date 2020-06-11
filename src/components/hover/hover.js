import React from 'react';
import withCounter from '../HOC/withCounterHOC';
import '../buttons/buttons.css';

function Hover(props){
    const { count, incrementCount } = props;
    return (
        <div className='container'>
        <button onMouseOver={incrementCount}>Hovered over { count } times</button>
        </div>
    )
}

export default withCounter(Hover);