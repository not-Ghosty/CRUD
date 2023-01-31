import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homecrud from './components/Homecrud'
import Createusers from './components/Createusers'
import Users from './components/Users'
import Edituser from './components/Edituser'
// import Contform from './components/Contform'

const App = () => {
  return (
    <div>
         <BrowserRouter>
      <Homecrud/>
      <Routes>
        <Route path='/createusers' element={<Createusers/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/edit/:index' element={<Edituser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
   
  )
}

export default App