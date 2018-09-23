import React from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from "axios";
import jsonpAdapter from "axios-jsonp"
import { Container } from 'reactstrap';

import routes from './config/routes';
import urls from './config/urls';
import { Header } from './components';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios({
      url: urls.getAll,
      adapter: jsonpAdapter
    })
      .then(data => this.setState({data: data.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
  <BrowserRouter>
      <Container>
        <Header/>
        <Switch>
          {routes.map((item, index) =>
            <Route
              key={index}
              exact={item.exact}
              path={item.path}
              component={() => <item.component data={this.state.data} />}
            />
          )}
        </Switch>
      </Container>
  </BrowserRouter>
    )
  }
}

export default App;

