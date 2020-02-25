import React, { Component } from 'react'
import {Switch, Router, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Detail from './components/Detail'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'


class App extends Component {
  render(){
    return (
      <div className="App">
        <React.Fragment>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/cart" component={Cart}/>
            <Route component={Default}/>
          </Switch>

          <Modal/>
        </React.Fragment>
        
        
      </div>
    );
  }
}

export default App;
