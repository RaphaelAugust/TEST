
import './App.css';
import React, { useState,useEffect } from 'react'
import { render } from '@testing-library/react';
import Me from './components/me'
import Login from './components/test1'
import Test from './components/test2'
import axios from 'axios';
//import ButtonJ from './components/ButtonJ'
import Navbar from './components/NavBar/index.js'
import Post from './components/post'
import {BrowserRouter as Router , Switch ,  Route} from 'react-router-dom'
import Signin from './components/signin/signin'
import Singup from './components/me'

import Test2 from './components/test2';
function App (props){
return(


// <Router>
//     <div className='App'>
//         <Route path='/Test' component={Test2}/>

//     </div>

// </Router>


<div>waa
<Login />
<Post />
<Navbar/>
<Singup />

</div>


)

}
export default App