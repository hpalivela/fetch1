import React from 'react'
// import Create from './operations/Create'
// import Parent from './components/Parent'
import Posts from './Posts'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from './SinglePost';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Posts/>}></Route>
        <Route exact path="/singlePost/:id" element={<SinglePost/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Parent/> */}
      {/* <Create/> */}
    </div>
  )
}

export default App
