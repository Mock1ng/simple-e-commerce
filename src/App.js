import React from 'react'
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ItemProvider } from './context/ItemsContext'


function App() {
  return (
    <Router>
      <div>
        <ItemProvider>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </ItemProvider>
      </div>
    </Router>
  )
}

export default App
