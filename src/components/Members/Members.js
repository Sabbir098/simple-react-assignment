import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import './Members.css';

const Members = () => {
    const [actors, setActors] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setActors(data));
    }, [])
    const addToCart = actor => {
        const newCart = [...cart, actor]
        setCart(newCart)
    }
    return (
    <div className='container'>
        <div className='card-box'>
        {
            actors.map(actor => <Actor 
                addToCart={addToCart}
                 actor={actor}
                 key={actor.key}
                 ></Actor>)
        }
        </div>
    <div className='add-cart'>
        <Cart cart={cart}></Cart>
    </div>
    </div>
    
        
    )
};

export default Members;
