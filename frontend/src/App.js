import './App.css'
import Header from './components/ui/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
      </Switch>
    </Router>
  )
}

export default App
