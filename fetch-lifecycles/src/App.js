import React, { Component } from 'react';
import './App.css';
let products = null;

class App extends Component {
  constructor() {
    super()
    this.state={
      productsArray : null,
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=tv&limit=6');
    const result = await data.json()
    this.setState({
      productsArray : result.results //EL RECOÑISIMO DE SU MADRE
    })
    console.log(this.state.productsArray)
  }

  render() {
    if (this.state.productsArray !== null) {
      products = this.state.productsArray.map((prod, prodKey, newProdArr) => {
        return (
          <div key={prodKey} id={prodKey}>
            <img src={prod.thumbnail} alt={prod.title}></img>
            <p>{prod.title}</p>
            <p>${prod.price}</p>
            <p>{prod.installments.quantity}x ${prod.installments.amount}</p>
            {/** falta shipping y cuotas*/}
          </div>
        )
      })
    }
    return (
       <section>
         {products}
       </section>
    );
  }
}

export default App;
