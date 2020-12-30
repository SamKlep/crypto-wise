import './App.css'
import Header from './components/ui/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen'
import StockScreen from './components/screens/StockScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/stock-prices' component={StockScreen} exact />
      </Switch>
    </Router>
  )
}

export default App
