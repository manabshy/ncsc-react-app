import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/homePage'
import Article from './article/articlePage'
const Main = () => (
  <main>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/article' component={Article}/>

      </Switch>      
  </main>
)

export default Main
