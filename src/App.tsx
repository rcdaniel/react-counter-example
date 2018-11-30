import * as React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './containers/Header';
import Home from './containers/Home';
import About from './containers/About';
import Movies from './containers/Movies';

export default class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movies" component={Movies}/>
      </div>
    </Router>
    )
  }
}
