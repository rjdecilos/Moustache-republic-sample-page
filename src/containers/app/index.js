import React, { useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => {

  useEffect(() => {
    document.body.setAttribute('style', 'margin: 0')
  });
  return (<div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>)
}

export default App
