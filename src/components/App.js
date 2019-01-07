import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Table from './Table';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Table} />
          </Switch>
        </div>
      </Router>
    )
  }

}


export default App;
