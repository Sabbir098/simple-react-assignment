import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Actor.css';

const Actor = (props) => {
    // console.log(props.actor)
    const {name, age, img, roll, country, networth} = props.actor;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (  
        <div className='card-container'>
            <div className='card'>
            <div>
            <img className='image' src={img} alt="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <h5>Age: {age}</h5>
                <h5>Roll: {roll}</h5>
                <h5>Country: {country}</h5>
                <h5>NetWorth: {networth}</h5>
                <button onClick={()=>props.addToCart(props.actors)} className='regular-btn'>{element} Add To Cart</button>
            </div>
        </div>
        </div>
        
    );
};
export default Actor;