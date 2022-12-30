import React from 'react';
import Counter from '../../Redux/Counter/Counter';

const Home = () => {
    return (
        <div>
            
            <div className='container mx-auto'>
                <Counter></Counter>
            </div>
        </div>
    );
};

export default Home;