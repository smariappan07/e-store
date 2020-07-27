import React,{ Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Spec from './containers/ProductInfo/ProductInfo';

class App extends Component {

  render () {
      let routes = (
          <Switch>
              <Route path="/mobiles"  component={Home} />
              <Route path="/spec"  component={Spec} />
              <Redirect to="/mobiles" />
          </Switch>
      );
    return (
       <Layout>
           {routes}
       </Layout>
    );
  }
}

export default App;
