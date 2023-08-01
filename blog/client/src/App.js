import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'
import './App.css';
import Heading from './Component/Heading';
import List from './Component/Post/List';
import Upload from './Component/Post/Upload';
import Detail from './Component/Post/Detail';
import Edit from './Component/Post/Edit';
import Home from './Component/Home';

import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/now-ui-kit.css";
import "../src/assets/demo/demo.css";


function App() {


  const [ContentList, setContentList] = useState([]);



  return (
    <>
      <Heading />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/list' element={<List ContentList={ContentList} setContentList={setContentList} />} />

        <Route path='/upload' element={<Upload ContentList={ContentList} setContentList={setContentList} />} />

        {/* path 변수는 : 을 통해 줄 수 있다 */}
        <Route path='/post/:postNum' element={<Detail />} />

        <Route path='/edit/:postNum' element={<Edit />} />

      </Routes>

    </>

  );
}

export default App;
