import React from 'react';
import { addToDB, removeToDB } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, _id } = props.cosmetic;
    // add to cart
    const addToCart = (_id) => {
        addToDB(_id)
    }
    // remove cart
    const removeFromCart = (_id) => {
        removeToDB(_id)
    }

    // const addToCartWithParam = () => addToCart(_id)
    return (
        <div className='product'>
            <h2>Buy : {name}</h2>
            <p>Price :{price}</p>
            <p><small>it's id : {_id}</small></p>
            {/* 
            <button onClick={addToCartWithParam}>add to cart</button>
            <button onClick={() => addToCart(_id)}>add to cart</button>
             */}
            <button onClick={() => addToCart(_id)}>Add to cart</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;