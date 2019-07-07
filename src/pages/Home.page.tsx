import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Thi is Home</h1>
        <div>
            <Link to="/temp"><a>To Temp</a></Link>
        </div>
    </div>
);

export default Home;
