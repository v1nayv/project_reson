import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Basics from './Basics';
import Education from './Education';

class App extends React.Component {
  state = {name: '', email: '', psummary: '', university: ''}

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
    console.log(this.state)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/basics">Basics</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><a href="">Work Experience</a></li>
            </ul>
            <hr/>
            <Route path="/basics" render={() => <Basics 
                                                  name={this.state.name} 
                                                  email={this.state.email} 
                                                  psummary={this.state.psummary}
                                                  handleChange={this.handleChange} 
                                                />}
            />
            <Route path="/education" render={() => <Education 
                                                  university={this.state.university}                                                   
                                                  handleChange={this.handleChange} 
                                                />}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;