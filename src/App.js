import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState } from 'react'
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './Components/News';

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API
  const pageSize=12
  const country='us'
  const [progress, setProgress] = useState(0)

    return (
      <BrowserRouter>
      <Navbar/>
      <LoadingBar color='#f11946' height={'3px'} progress={progress}/>
      <Routes>
      <Route exact path="/" element={<News setProgress = { setProgress} apikey={ apikey} key="general" pageSize={ pageSize} country={ country} category={'general'}/>} />
      <Route exact path="/business" element={<News setProgress = { setProgress} apikey={ apikey} key="business" pageSize={ pageSize} country={ country} category={'business'}/>} />
      <Route exact path="/entertainment" element={<News setProgress = { setProgress} apikey={ apikey} key="entertainment" pageSize={ pageSize} country={ country} category={'entertainment'}/>} />
      <Route exact path="/general" element={<News setProgress = { setProgress} apikey={ apikey} key="general" pageSize={ pageSize} country={ country} category={'general'}/>} />
      <Route exact path="/health" element={<News setProgress = { setProgress} apikey={ apikey} key="health" pageSize={ pageSize} country={ country} category={'health'}/>} />
      <Route exact path="/science" element={<News setProgress = { setProgress} apikey={ apikey} key="science" pageSize={ pageSize} country={ country} category={'science'}/>} />
      <Route exact path="/sports" element={<News setProgress = { setProgress} apikey={ apikey} key="sports" pageSize={ pageSize} country={ country} category={'sports'}/>} />
      <Route exact path="/technology" element={<News setProgress = { setProgress} apikey={ apikey} key="technology" pageSize={ pageSize} country={ country} category={'technology'}/>} />
      </Routes>
      </BrowserRouter>
    )
}
export default App