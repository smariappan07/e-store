import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Spec from './containers/ProductInfo/ProductInfo';

class App extends Component {
  render () {
      let routes = (
          <Switch>
              <Route path="/" component={Home} />
              {/*<Route path="/spec" component={Spec} />*/}
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
