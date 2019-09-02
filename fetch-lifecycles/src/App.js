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
  // componentDidMount() {
  //   console.log(1)

  //   fetch('https://api.mercadolibre.com/sites/MLA/search?q=tv&limit=5').then((data) => {
  //     data.json().then((jsonData) => {
  //       console.log(jsonData)
  //     })
  //   })

  //   console.log(2)
  // }
  render() {
    return (
       <section>
         <ProductList productsArray={this.state.productsArray}></ProductList>
       </section>
    );
  }
}

export default App;
