import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layouts from './Layouts.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Leetcode , { githubInfoLoader1 } from './components/Leetcode/Leetcode.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Arrays from './components/DSA/Arrays.jsx'
import Dynamic from './components/DSA/Dynamic.jsx'
import Bitm from './components/DSA/Bitm.jsx'
import Algorithm from './components/DSA/Algorithm.jsx'
import Tree from './components/DSA/Tree.jsx'
import Graph from './components/DSA/Graph.jsx'
import STL from './components/DSA/STL.jsx'
import Stack from './components/DSA/Stack.jsx'
import Linkedlist from './components/DSA/Linkedlist.jsx'
import Recursion from './components/DSA/Recursion.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layouts />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='Arrays' element={<Arrays />} />
      <Route path='Algorithm' element={<Algorithm />} />
      <Route path='Bitm' element={<Bitm />} />
      <Route path='Dynamic' element={<Dynamic />} />
      <Route path='Tree' element={<Tree />} />
      <Route path='Graph' element={<Graph />} />
      <Route path='STL' element={<STL />} />
      <Route path='Stack' element={<Stack />} />
      <Route path='Linkedlist' element={<Linkedlist />} />
      <Route path='Recusion' element={<Recursion />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfoLoader} path='Leetcode' element={<Leetcode />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> 
    </Route>     
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)