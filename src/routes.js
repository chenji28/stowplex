import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import HomePage from './pages/HomePage/'
import ListingPage from './pages/ListingPage/'
import SearchPage from './pages/SearchPage/'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
      <Route path='listing/:hostId' component={ListingPage} />
      <Route path='search' component={SearchPage} />
  </Route>
)
