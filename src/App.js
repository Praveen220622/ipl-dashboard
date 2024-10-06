import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/" component={Home} />
    <Route exact path="/TeamMatches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Routes>
)

export default App
