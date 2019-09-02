import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  constructor() {
    super()
    this.state={
      productsArray : null,
    }
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=tv&limit=5');
      const result = await data.json()
      this.setState({
        productsArray : result.results
      })
    }catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
       <section>
         <ProductList productsArray={this.state.productsArray}></ProductList>
       </section>
    );
  }
}

export default App;
