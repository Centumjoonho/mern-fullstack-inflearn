import React from 'react'
import Tabs from './Home/Tabs';
import IndexHeader from './Home/IndexHeader';
import { Counter } from '../features/counter/Counter';


const Home = () => {

    return (
        <>
            <div className="wrapper">
                <IndexHeader />
                <div className="main">

                    <Tabs />

                </div>
                <div>
                    <Counter />
                </div>

            </div>
        </>
    );
}

export default Home