import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layouts from './Layouts.jsx'
import Home from './components/Home/Home.jsx'
import Home2 from './components/Home2/Home2.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Leetcode from './components/Leetcode/Leetcode.jsx'
import Codolio from './components/Codolio/Codolio.jsx'
import Github from './components/Github/Github.jsx'
import Linkedin from './components/Linkedin/Linkedin.jsx'
import AIML from './components/ML/AIML.jsx'

import Arrays from './components/DSA/Arrays.jsx'
import Narray1 from './components/Innerdsa/arraydsa/Narray1.jsx'
import Narray2 from './components/Innerdsa/arraydsa/Narray2.jsx'
import Narray3 from './components/Innerdsa/arraydsa/Narray3.jsx'
import Narray4 from './components/Innerdsa/arraydsa/Narray4.jsx'
import Narray5 from './components/Innerdsa/arraydsa/Narray5.jsx'
import Narray6 from './components/Innerdsa/arraydsa/Narray6.jsx'

import Algorithm from './components/DSA/Algorithm.jsx'
import Algo1 from './components/Innerdsa/algorithmdsa/Algo1.jsx'
import Algo2 from './components/Innerdsa/algorithmdsa/Algo2.jsx'
import Algo3 from './components/Innerdsa/algorithmdsa/Algo3.jsx'
import Algo4 from './components/Innerdsa/algorithmdsa/Algo4.jsx'
import Algo5 from './components/Innerdsa/algorithmdsa/Algo5.jsx'
import Algo6 from './components/Innerdsa/algorithmdsa/Algo6.jsx'

import Bitm from './components/DSA/Bitm.jsx'
import Bit1 from './components/Innerdsa/bitmdsa/Bit1.jsx'
import Bit2 from './components/Innerdsa/bitmdsa/Bit2.jsx'
import Bit3 from './components/Innerdsa/bitmdsa/Bit3.jsx'
import Bit4 from './components/Innerdsa/bitmdsa/Bit4.jsx'

import Dynamic from './components/DSA/Dynamic.jsx'
import Dynamic1 from './components/Innerdsa/dynamicdsa/Dynamic1.jsx'
import Dynamic2 from './components/Innerdsa/dynamicdsa/Dynamic2.jsx'
import Dynamic3 from './components/Innerdsa/dynamicdsa/Dynamic3.jsx'
import Dynamic4 from './components/Innerdsa/dynamicdsa/Dynamic4.jsx'
import Dynamic5 from './components/Innerdsa/dynamicdsa/Dynamic5.jsx'
import Dynamic6 from './components/Innerdsa/dynamicdsa/Dynamic6.jsx'

import Tree from './components/DSA/Tree.jsx'
import Tree1 from './components/Innerdsa/treedsa/Tree1.jsx'
import Tree2 from './components/Innerdsa/treedsa/Tree2.jsx'
import Tree3 from './components/Innerdsa/treedsa/Tree3.jsx'
import Tree4 from './components/Innerdsa/treedsa/Tree4.jsx'
import Tree5 from './components/Innerdsa/treedsa/Tree5.jsx'

import Graph from './components/DSA/Graph.jsx'
import Graph1 from './components/Innerdsa/graphdsa/Graph1.jsx'
import Graph2 from './components/Innerdsa/graphdsa/Graph2.jsx'
import Graph3 from './components/Innerdsa/graphdsa/Graph3.jsx'
import Graph4 from './components/Innerdsa/graphdsa/Graph4.jsx'
import Graph5 from './components/Innerdsa/graphdsa/Graph5.jsx'
import Graph6 from './components/Innerdsa/graphdsa/Graph6.jsx'
import Graph7 from './components/Innerdsa/graphdsa/Graph7.jsx'

import STL from './components/DSA/STL.jsx'
import Stl1 from './components/Innerdsa/stldsa/Stl1.jsx'
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
import List1 from './components/Innerdsa/linklistdsa/List1.jsx'
import List2 from './components/Innerdsa/linklistdsa/List2.jsx'
import List3 from './components/Innerdsa/linklistdsa/List3.jsx'
import List4 from './components/Innerdsa/linklistdsa/List4.jsx'
import List5 from './components/Innerdsa/linklistdsa/List5.jsx'

import Recursion from './components/DSA/Recursion.jsx'
import Recursion1 from './components/Innerdsa/recursiondsa/Recursion1.jsx'
import Recursion2 from './components/Innerdsa/recursiondsa/Recursion2.jsx'
import Recursion3 from './components/Innerdsa/recursiondsa/Recursion3.jsx'
import Recursion4 from './components/Innerdsa/recursiondsa/Recursion4.jsx'

import Trie from './components/DSA/Trie.jsx'
import Trie1 from './components/Innerdsa/Trie/Trie1.jsx'
import Trie2 from './components/Innerdsa/Trie/Trie2.jsx'
import Trie3 from './components/Innerdsa/Trie/Trie3.jsx'

import Foundation from './components/ML2/Foundation.jsx';
import BasicDeployment from './components/ML2/BasicDeployment.jsx';
import DataPreprocessing from './components/ML2/DataPreprocessing.jsx';
import MachineLearning from './components/ML2/MachineLearning.jsx';
import ModelEvaluation from './components/ML2/ModelEvaluation.jsx';
import UnsupervisedLearning from './components/ML2/UnsupervisedLearning.jsx';
import SupervisedLearning from './components/ML2/SupervisedLearning.jsx';
import ReinforcementLearning from './components/ML2/ReinforcementLearning.jsx';
import AdvancedML from './components/ML2/AdvancedML.jsx';

import AIvsMLvsDL from './components/ML3/AIvsMLvsDL.jsx'
import AnomalyDetection from './components/ML3/AnomalyDetection.jsx'
import BasicsOfRL from './components/ML3/BasicsOfRL.jsx'
import BiasVarianceTradeoff from './components/ML3/BiasVarianceTradeoff.jsx'
import Calculus from './components/ML3/Calculus.jsx'
import Classification from './components/ML3/Classification.jsx'
import Clustering from './components/ML3/Clustering.jsx'
import DataCleaning from './components/ML3/DataCleaning.jsx'
import DataTransformation from './components/ML3/DataTransformation.jsx'
import DimensionalityReduction from './components/ML3/DimensionalityReduction.jsx'
import DQN from './components/ML3/DQN.jsx'
import EnsembleLearning from './components/ML3/EnsembleLearning.jsx'
import EvaluationMetrics from './components/ML3/EvaluationMetrics.jsx'
import FeatureEngineering from './components/ML3/FeatureEngineering.jsx'
import HistoryML from './components/ML3/HistoryML.jsx'
import HyperparameterTuning from './components/ML3/HyperparameterTuning.jsx'
import LinearAlgebra from './components/ML3/LinearAlgebra.jsx'
import MDP from './components/ML3/MDP.jsx'
import MLPipeline from './components/ML3/MLPipeline.jsx'
import NeuralNetworks from './components/ML3/NeuralNetworks.jsx'
import PolicyGradientMethods from './components/ML3/PolicyGradientMethods.jsx'
import Probability from './components/ML3/Probability.jsx'
import Python from './components/ML3/Python.jsx'
import QLearning from './components/ML3/QLearning.jsx'
import Regression from './components/ML3/Regression.jsx'
import RegularizationBasics from './components/ML3/RegularizationBasics.jsx'
import RLGamingRobotics from './components/ML3/RLGamingRobotics.jsx'
import SplittingData from './components/ML3/SplittingData.jsx'
import TimeSeriesForecasting from './components/ML3/TimeSeriesForecasting.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layouts />}>
      <Route path='' element={<Home />} />
      <Route path='Home2' element={<Home2 />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='Leetcode' element={<Leetcode />} />
      <Route path='Codolio' element={<Codolio />} />
      <Route path='github' element={<Github />} /> 
      <Route path='Linkedin' element={<Linkedin />} /> 
      <Route path='AIML' element={<AIML />} /> 


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
  
      <Route path='Trie' element={<Trie />} />
      <Route path='Trie1' element={<Trie1 />} />
      <Route path='Trie2' element={<Trie2 />} />
      <Route path='Trie3' element={<Trie3 />} />

      <Route path='AIML' element={<AIML />} />
      <Route path='BasicDeployment' element={<BasicDeployment />} />
      <Route path='DataPreprocessing' element={<DataPreprocessing />} />
      <Route path='Foundation' element={<Foundation />} />
      <Route path='MachineLearning' element={<MachineLearning />} />
      <Route path='ModelEvaluation' element={<ModelEvaluation />} />
      <Route path='UnsupervisedLearning' element={<UnsupervisedLearning />} />
      <Route path='SupervisedLearning' element={<SupervisedLearning />} />
      <Route path='ReinforcementLearning' element={<ReinforcementLearning />} />
      <Route path='AdvancedML' element={<AdvancedML />} />
      
      <Route path='AIvsMLvsDL' element={<AIvsMLvsDL />} />
      <Route path='AnomalyDetection' element={<AnomalyDetection />} />
      <Route path='BasicsOfRL' element={<BasicsOfRL />} />
      <Route path='BiasVarianceTradeoff' element={<BiasVarianceTradeoff />} />
      <Route path='Calculus' element={<Calculus />} />
      <Route path='Classification' element={<Classification />} />
      <Route path='Clustering' element={<Clustering />} />
      <Route path='DataCleaning' element={<DataCleaning />} />
      <Route path='DataTransformation' element={<DataTransformation />} />
      <Route path='DimensionalityReduction' element={<DimensionalityReduction />} />
      <Route path='DQN' element={<DQN />} />
      <Route path='EnsembleLearning' element={<EnsembleLearning />} />
      <Route path='EvaluationMetrics' element={<EvaluationMetrics />} />
      <Route path='FeatureEngineering' element={<FeatureEngineering />} />
      <Route path='HistoryML' element={<HistoryML />} />
      <Route path='HyperparameterTuning' element={<HyperparameterTuning />} />
      <Route path='LinearAlgebra' element={<LinearAlgebra />} />
      <Route path='MDP' element={<MDP />} />
      <Route path='MLPipeline' element={<MLPipeline />} />
      <Route path='NeuralNetworks' element={<NeuralNetworks />} />
      <Route path='PolicyGradientMethods' element={<PolicyGradientMethods />} />
      <Route path='Probability' element={<Probability />} />
      <Route path='Python' element={<Python />} />
      <Route path='QLearning' element={<QLearning />} />
      <Route path='Regression' element={<Regression />} />
      <Route path='RegularizationBasics' element={<RegularizationBasics />} />
      <Route path='RLGamingRobotics' element={<RLGamingRobotics />} />
      <Route path='SplittingData' element={<SplittingData />} />
      <Route path='TimeSeriesForecasting' element={<TimeSeriesForecasting />} />

    </Route>     
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)