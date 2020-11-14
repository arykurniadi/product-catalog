import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'


import ProductListPage from './pages/product-list-page';
import ProductDetailPage from './pages/product-detail-page';

class App extends Component {
  render() {
    return (
      <div>
        <Menu fixed='top' inverted style = {{border: '1px solid blue'}}>
          <Container>
            <Menu.Item as='a' header>
              <NavLink to="/">Product</NavLink>
            </Menu.Item>
          </Container>
        </Menu>

        <Container style={{ marginTop: '7em' }}>
          <Route exact path="/" component={ProductListPage} />
          <Route exact path="/product/detail/:id/:qty" component={ProductDetailPage}/>
        </Container>

      </div>      

    );
  }
}

export default App;