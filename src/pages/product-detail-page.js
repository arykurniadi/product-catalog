import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, updateCarts } from '../actions/product-actions';

import {
    Input,
    Item,
    Label,
    Icon,
    Card,
    Image,
    Table,
    Button,
    Modal,
    Dimmer,
    Loader,
    Grid
} from 'semantic-ui-react';


class ProductDetailPage extends Component {
  state = {
    qty: 0,
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  onQty = (flag) => {
    if(flag == 'increment') {
        this.state.qty = Number(this.state.qty) + 1;    
        this.forceUpdate()
    } else {
        if(this.state.qty <= 0) {
            return;
        }   

        this.state.qty = Number(this.state.qty) - 1;    
        this.forceUpdate()            
    }        
  }

  render() {
      let me = this;
      let id = this.props.match.params.id
      let qtyOld = (this.props.match.params.qty != null ? this.props.match.params.qty : 0);
      let product = this.props.products.filter((e) => {
        return e.id == id
      });
      let title = null
      let qty = Number(me.state.qty) + Number(qtyOld);

      if(product.length > 0) {
        title = product[0].title
      }

      return (
          <div>
              <h1>Product Detail</h1>
              <div>                    
                  <div>
                    <Item.Group divided>
                        <Item>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />

                          <Item.Content>
                            <Item.Header as='a'>{title}</Item.Header>
                            <Item.Meta>
                              <span className='cinema'>Harga Rp. 100.000,-</span>
                            </Item.Meta>
                            <Item.Description>Description</Item.Description>
                            <Item.Extra>
                              <Grid columns={2}>
                                  <Grid.Column>
                                      <Input placeholder='0' style={{width:50}}>
                                          <Button icon="minus" onClick={ (e) =>  me.onQty('decrement') } />
                                          <input value={qty}
                                              style={{ 
                                                  marginRight: "3px"
                                              }} 
                                          />
                                          <Button icon="plus" onClick={ (e) =>  me.onQty('increment') } />
                                      </Input>          
                                  </Grid.Column>
                                  <Grid.Column>
                                      <Button basic color='green'
                                           onClick={  
                                              (e) => {
                                                  me.props.history.push('/');
                                              }
                                          }                                    
                                      >
                                          Beli
                                      </Button>
                                  </Grid.Column>
                              </Grid>
                            </Item.Extra>
                          </Item.Content>
                        </Item>
                    </Item.Group>
                  </div>
              </div>
          </div>
      )
  }
}

function mapStateToProps(state) {
    return {
        products : state.productStore.products
    }
}
  
export default connect(mapStateToProps, {fetchProducts, updateCarts})(ProductDetailPage);