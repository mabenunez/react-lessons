import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';

class ProductList extends Component {
  constructor(props){
    super(props)
    this.products = null;                                                               //this.products es lo mismo que una variable global. This responde a todo el contexto class
  }
  render() {
    if (this.props.productsArray !== null) {
      this.products = this.props.productsArray.map((prod, prodKey, newProdArr) => {
        return (
          <ProductCard key={prodKey}
            imgSrc={prod.thumbnail}
            imgAlt={prod.title}
            title={prod.title}
            price={prod.price}
            currency={prod.currency_id}
            nCuotas={prod.installments.quantity}
            montoCuotas={prod.installments.amount}
          />
        )
      })
    }
    return (
       <ul className={'flex-row'}>
         {this.products}
       </ul>
    );
  }
}

export default ProductList;