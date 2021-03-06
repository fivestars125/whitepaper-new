import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../Home'
import Founders from '../Founders'
import WhitePaper from '../WhitePaper'

const routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/founders" exact component={Founders} />
    <Route path="/whitepaper" exact component={WhitePaper} />
    <Redirect path="*" to="/" />
  </Switch>
)

export default routes
