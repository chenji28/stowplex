import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import HomePage from './pages/HomePage/'
import ListingPage from './pages/ListingPage/'
import SearchPage from './pages/SearchPage/'
import MapPage from './pages/MapPage/'

import UnderConstructionPage from './pages/UnderConstructionPage/'

// export default (
//   <Route path='/' component={App}>
//     <IndexRoute component={HomePage} />
//     <Route path='search' component={SearchPage} />
//     <Route path='listing/:listingId' component={ListingPage} />
//     <Route path='map' component={MapPage} />
//   </Route>
// )
export default (
  <Route path='/' component={App}>
    <IndexRoute component={UnderConstructionPage} />
    <Route path='*' component={UnderConstructionPage} />
  </Route>
)
