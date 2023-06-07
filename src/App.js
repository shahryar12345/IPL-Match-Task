import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import DetailContainer from './containers/DetailContainer/DetailContainer';

function App() {
  
    return (<>
        <Routes>
            <Route path='/' element={<HomeContainer/>} />
            <Route path='/news' element={<DetailContainer/>} />
            <Route path='/players' element={<DetailContainer/>} />
        </Routes>
    </>)
}

export default App;
