import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import './App.css';
import Heading from './Component/Heading';
import List from './Component/Post/List';
import Upload from './Component/Post/Upload';
import Edit from './Component/Post/Edit';
import Home from './Component/Home';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import PostArea from './Component/Post/PostArea';

//react-redux
import { Counter } from './features/counter/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, clearUser } from './Reducer/userSlice';
import firebase from './firebase';

//메인 페이지 css
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/now-ui-kit.css";
import "../src/assets/demo/demo.css";




function App() {


  const [ContentList, setContentList] = useState([]);

  const dispatch = useDispatch();
  //저장 되어 있는  state를 가져올 수 있다
  // const user = useSelector((state) => state.user)

  useEffect(() => {
    // 로그인이나 로그아웃을 하면 값 확인 , 그외에는 값 null
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo) {

        // 데이터 값 정렬화 하는게 좋다고 한다 ! 
        const userData = {

          displayName: userInfo.multiFactor.user.displayName,
          uid: userInfo.multiFactor.user.uid,
          accessToken: userInfo.multiFactor.user.accessToken

        };
        var loginData = loginUser(userData);
        // //보낸다 -> store 
        dispatch(loginData);
      }
      else {
        dispatch(clearUser());
      }

    })

  }, [])





  return (
    <>
      <Heading />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/list' element={<List ContentList={ContentList} setContentList={setContentList} />} />

        <Route path='/upload' element={<Upload ContentList={ContentList} setContentList={setContentList} />} />

        {/* path 변수는 : 을 통해 줄 수 있다 */}
        <Route path='/post/:postNum' element={<PostArea />} />

        <Route path='/edit/:postNum' element={<Edit />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/counter' element={<Counter />} />

      </Routes>

    </>

  );
}

export default App;
