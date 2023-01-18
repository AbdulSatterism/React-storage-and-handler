import React from 'react';
import { multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const a = 12;
    const b = 5;
    const result = multiply(a, b);
    return (
        <div>
            <h2>This is shoes components</h2>
            <h3>result multiply : {result}</h3>
        </div>
    );
};

export default Shoes;