import React, { useEffect, useState } from 'react';
import { add, getTotal } from '../../utilities/Calculate';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    // const first = 55;
    // const second = 25;
    // const total = add(first, second)
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    // reducer
    const total = getTotal(cosmetics);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <h2>money need :{total}</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic._id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;