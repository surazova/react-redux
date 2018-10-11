import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom' //Added switch tag so only one of the links takes presedence, and doesn't overlap. This loads up only one component at a time. 
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
//importing post (route parameter)
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home} /> 
        <Route path='/about' component={About} /> 
        <Route path='/contact' component={Contact} /> 
        <Route path="/:post_id" component={Post} /> 
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
