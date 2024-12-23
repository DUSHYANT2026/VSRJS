import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layouts from './Layouts.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Leetcode ,{githubInfoLoader1} from './components/Leetcode/Leetcode.jsx'
import Codolio,{githubInfoLoader2} from './components/Codolio/Codolio.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

import Arrays from './components/DSA/Arrays.jsx'
import Narray1 from './components/Innerdsa/arraydsa/Narray1.jsx'
import Narray2 from './components/Innerdsa/arraydsa/Narray2.jsx'
import Narray3 from './components/Innerdsa/arraydsa/Narray3.jsx'
import Narray4 from './components/Innerdsa/arraydsa/Narray4.jsx'
import Narray5 from './components/Innerdsa/arraydsa/Narray5.jsx'
import Narray6 from './components/Innerdsa/arraydsa/Narray6.jsx'

import Algorithm from './components/DSA/Algorithm.jsx'
import Algo1 from './components/Innerdsa/algorithmdsa/algo1.jsx'
import Algo2 from './components/Innerdsa/algorithmdsa/algo2.jsx'
import Algo3 from './components/Innerdsa/algorithmdsa/algo3.jsx'
import Algo4 from './components/Innerdsa/algorithmdsa/algo4.jsx'
import Algo5 from './components/Innerdsa/algorithmdsa/algo5.jsx'
import Algo6 from './components/Innerdsa/algorithmdsa/algo6.jsx'

import Bitm from './components/DSA/Bitm.jsx'
import Bit1 from './components/Innerdsa/bitmdsa/bit1.jsx'
import Bit2 from './components/Innerdsa/bitmdsa/bit2.jsx'
import Bit3 from './components/Innerdsa/bitmdsa/bit3.jsx'
import Bit4 from './components/Innerdsa/bitmdsa/bit4.jsx'

import Dynamic from './components/DSA/Dynamic.jsx'
import Dynamic1 from './components/Innerdsa/dynamicdsa/dynamic1.jsx'
import Dynamic2 from './components/Innerdsa/dynamicdsa/dynamic2.jsx'
import Dynamic3 from './components/Innerdsa/dynamicdsa/dynamic3.jsx'
import Dynamic4 from './components/Innerdsa/dynamicdsa/dynamic4.jsx'
import Dynamic5 from './components/Innerdsa/dynamicdsa/dynamic5.jsx'
import Dynamic6 from './components/Innerdsa/dynamicdsa/dynamic6.jsx'

import Tree from './components/DSA/Tree.jsx'
import Tree1 from './components/Innerdsa/treedsa/tree1.jsx'
import Tree2 from './components/Innerdsa/treedsa/tree2.jsx'
import Tree3 from './components/Innerdsa/treedsa/tree3.jsx'
import Tree4 from './components/Innerdsa/treedsa/tree4.jsx'
import Tree5 from './components/Innerdsa/treedsa/tree5.jsx'

import Graph from './components/DSA/Graph.jsx'
import Graph1 from './components/Innerdsa/graphdsa/graph1.jsx'
import Graph2 from './components/Innerdsa/graphdsa/graph2.jsx'
import Graph3 from './components/Innerdsa/graphdsa/graph3.jsx'
import Graph4 from './components/Innerdsa/graphdsa/graph4.jsx'
import Graph5 from './components/Innerdsa/graphdsa/graph5.jsx'
import Graph6 from './components/Innerdsa/graphdsa/graph6.jsx'
import Graph7 from './components/Innerdsa/graphdsa/graph7.jsx'

import STL from './components/DSA/STL.jsx'
import Stl1 from './components/Innerdsa/stldsa/stl1.jsx'
import Stl2 from './components/Innerdsa/stldsa/Stl2.jsx'
import Stl3 from './components/Innerdsa/stldsa/Stl3.jsx'
import Stl4 from './components/Innerdsa/stldsa/Stl4.jsx'
import Stl5 from './components/Innerdsa/stldsa/Stl5.jsx'
import Stl6 from './components/Innerdsa/stldsa/Stl6.jsx'

import Stack from './components/DSA/Stack.jsx'
import Stack1 from './components/Innerdsa/stackdsa/Stack1.jsx'
import Stack2 from './components/Innerdsa/stackdsa/Stack2.jsx'
import Stack3 from './components/Innerdsa/stackdsa/Stack3.jsx'
import Stack4 from './components/Innerdsa/stackdsa/Stack4.jsx'
import Stack5 from './components/Innerdsa/stackdsa/Stack5.jsx'

import Linkedlist from './components/DSA/Linkedlist.jsx'
import List1 from './components/Innerdsa/linklistdsa/list1.jsx'
import List2 from './components/Innerdsa/linklistdsa/list2.jsx'
import List3 from './components/Innerdsa/linklistdsa/list3.jsx'
import List4 from './components/Innerdsa/linklistdsa/list4.jsx'
import List5 from './components/Innerdsa/linklistdsa/list5.jsx'

import Recursion from './components/DSA/Recursion.jsx'
import Recursion1 from './components/Innerdsa/recursiondsa/recursion1.jsx'
import Recursion2 from './components/Innerdsa/recursiondsa/recursion2.jsx'
import Recursion3 from './components/Innerdsa/recursiondsa/recursion3.jsx'
import Recursion4 from './components/Innerdsa/recursiondsa/recursion4.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layouts />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfoLoader} path='Leetcode' element={<Leetcode />} />
      <Route loader={githubInfoLoader} path='Codolio' element={<Codolio />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} /> 


      <Route path='Arrays' element={<Arrays />} />
      <Route path='Narray1' element={<Narray1 />} />
      <Route path='Narray2' element={<Narray2 />} />
      <Route path='Narray3' element={<Narray3 />} />
      <Route path='Narray4' element={<Narray4 />} />
      <Route path='Narray5' element={<Narray5 />} />
      <Route path='Narray6' element={<Narray6 />} />

      <Route path='Algorithm' element={<Algorithm />} />
      <Route path='Algo1' element={<Algo1 />} />
      <Route path='Algo2' element={<Algo2 />} />
      <Route path='Algo3' element={<Algo3 />} />
      <Route path='Algo4' element={<Algo4 />} />
      <Route path='Algo5' element={<Algo5 />} />
      <Route path='Algo6' element={<Algo6 />} />
    
      <Route path='Bitm' element={<Bitm />} />
      <Route path='Bit1' element={<Bit1 />} />
      <Route path='Bit2' element={<Bit2 />} />
      <Route path='Bit3' element={<Bit3 />} />
      <Route path='Bit4' element={<Bit4 />} />

      <Route path='Dynamic' element={<Dynamic />} />
      <Route path='Dynamic1' element={<Dynamic1 />} />
      <Route path='Dynamic2' element={<Dynamic2 />} />
      <Route path='Dynamic3' element={<Dynamic3 />} />
      <Route path='Dynamic4' element={<Dynamic4 />} />
      <Route path='Dynamic5' element={<Dynamic5 />} />
      <Route path='Dynamic6' element={<Dynamic6 />} />

      <Route path='Tree' element={<Tree />} />
      <Route path='Tree1' element={<Tree1 />} />
      <Route path='Tree2' element={<Tree2 />} />
      <Route path='Tree3' element={<Tree3 />} />
      <Route path='Tree4' element={<Tree4 />} />
      <Route path='Tree5' element={<Tree5 />} />

      <Route path='Graph' element={<Graph />} />
      <Route path='Graph1' element={<Graph1 />} />
      <Route path='Graph2' element={<Graph2 />} />
      <Route path='Graph3' element={<Graph3 />} />
      <Route path='Graph4' element={<Graph4 />} />
      <Route path='Graph5' element={<Graph5 />} />
      <Route path='Graph6' element={<Graph6 />} />
      <Route path='Graph7' element={<Graph7 />} />

      <Route path='STL' element={<STL />} />
      <Route path='Stl1' element={<Stl1 />} />
      <Route path='Stl2' element={<Stl2 />} />
      <Route path='Stl3' element={<Stl3 />} />
      <Route path='Stl4' element={<Stl4 />} />
      <Route path='Stl5' element={<Stl5 />} />
      <Route path='Stl6' element={<Stl6 />} />

      <Route path='Stack' element={<Stack />} />
      <Route path='Stack1' element={<Stack1 />} />
      <Route path='Stack2' element={<Stack2 />} />
      <Route path='Stack3' element={<Stack3 />} />
      <Route path='Stack4' element={<Stack4 />} />
      <Route path='Stack5' element={<Stack5 />} />

      <Route path='Linkedlist' element={<Linkedlist />} />
      <Route path='List1' element={<List1 />} />
      <Route path='List2' element={<List2 />} />
      <Route path='List3' element={<List3 />} />
      <Route path='List4' element={<List4 />} />
      <Route path='List5' element={<List5 />} />

      <Route path='Recusion' element={<Recursion />} />
      <Route path='Recursion1' element={<Recursion1 />} />
      <Route path='Recursion2' element={<Recursion2 />} />
      <Route path='Recursion3' element={<Recursion3 />} />
      <Route path='Recursion4' element={<Recursion4 />} />
  
      
    </Route>     
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)