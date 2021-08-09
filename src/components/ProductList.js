import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
//import {storeProducts} from "../data";
import {ProductConsumer} from "../context";
import SocialFollow from "../SocialFollow"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class ProductList extends Component {
    render(){
        return(
            <React.Fragment>
            <div className="py-5">
            <div className="container">
            <Title name="Food" title=" Items"/>
          
          
            <div className="row">
            <ProductConsumer>
                {value =>{
                  return value.products.map(product =>{
                      return <Product key={product.id}
                       product={product}/>
                  })
                }}
            </ProductConsumer>
            </div>
            </div>
            </div>
            <SocialFollow />
            <button>
    <a
        href="https://wa.me/918698895018"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
    </a>
    </button> 
            </React.Fragment>
        )
    }
}
