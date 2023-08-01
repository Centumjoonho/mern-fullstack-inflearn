import React from 'react'
import Tabs from './Home/Tabs';
import IndexHeader from './Home/IndexHeader';


const Home = () => {

    return (
        <>
            <div className="wrapper">
                <IndexHeader />
                <div className="main">

                    <Tabs />

                </div>

            </div>
        </>
    );
}

export default Home