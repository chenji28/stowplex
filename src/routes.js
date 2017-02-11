import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import HomePage from './pages/HomePage/'
import HostPage from './pages/HostPage/'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='hosts' component={HostPage} />
  </Route>
)
