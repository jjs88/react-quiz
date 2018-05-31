import React, { Component } from 'react';
import Layout from './Layout/Layout';
import { Route } from 'react-router-dom';
import Browse from './Browse/Browse';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Browse}></Route>
        <Route exact path="/item/:id" render={() => <div>item here</div>}></Route>
      </Layout>
    )
  }
}

export default App;
