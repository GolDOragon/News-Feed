import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import NewsFeed from './components/NewsFeed'
import { About } from './pages/About'
import { Home } from './pages/Home'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/news" component={NewsFeed} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
