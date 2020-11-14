import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, updateCarts } from '../actions/product-actions';

import {
    Input,
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


class ProductListPage extends Component {
    state = {
        qty: 0,
        carts: [],
    }

    componentDidMount() {
        this.props.fetchProducts();

        this.props.updateCarts(30);
    }

    onQty = (flag, index) => {
        if(flag == 'increment') {
            this.state.carts[index].qty = this.state.carts[index].qty + 1;    
            this.forceUpdate()
        } else {
            if(this.state.carts[index].qty <= 0) {
                return;
            }   

            this.state.carts[index].qty = this.state.carts[index].qty - 1;    
            this.forceUpdate()            
        }        
    }

    render() {
        let me = this;

        console.log("--> render");

        const productList = () => {
            if(me.props.products.length > 0) {
                
                let result = me.props.products.map(function(record, index) {
                    let arrCarts = me.state.carts;
                    arrCarts.push({index: index, qty: 0});                    

                    return (                        
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{ record.title }</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Harga Rp 100.000,-</span>
                                </Card.Meta>
                                <Card.Description>
                                    Description Product
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Grid columns={2}>
                                    <Grid.Column>
                                        <Input placeholder='0' style={{width:50}}>
                                            <Button icon="minus" onClick={ (e) =>  me.onQty('decrement', index) } />
                                            <input value={me.state.carts[index].qty}
                                                style={{ 
                                                    marginRight: "3px"
                                                }} 
                                            />
                                            <Button icon="plus" onClick={ (e) =>  me.onQty('increment', index) } />
                                        </Input>          
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button basic color='green' 
                                            onClick={  
                                                (e) => {
                                                    me.props.history.push('/product/detail/'+record.id+'/'+me.state.carts[index].qty);
                                                }
                                            }
                                        >
                                            Checkout
                                        </Button>
                                    </Grid.Column>
                                </Grid>
                            </Card.Content>
                        </Card>                                            
                    );
                });

                return result;
            }
        }

        console.log("--> here");

        return (
            <div>
                <h1>Product List</h1>
                <div>                    
                    <div>
                        <Card.Group>
                            { productList() }
                        </Card.Group>
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

export default connect(mapStateToProps, {fetchProducts, updateCarts})(ProductListPage);