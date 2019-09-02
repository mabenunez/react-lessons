import React, { Component } from 'react';

class ProductCard extends Component {
    constructor(props) {
        super(props)
        this.currencyMap = {
          'ARS' : '$'
        } 
    }
  render() {
    //Maneras de llamar keys de un objeto:
    //this.currencyMap.ARS  //esto cuando sea algo hardcodeado
    //this.currencyMap['ARS']  //esta forma para llamar algo dinámico. Se puede llamar una variable entre los corchetes
    return (
      <li>
        <img src={this.props.imgSrc} alt={this.props.imgAlt}></img>
        <p>{this.props.title}</p>
        <p>
          <span>{this.currencyMap[this.props.currency]}</span>
          {this.props.price}
        </p>
        <p>{this.props.nCuotas}x ${this.props.montoCuotas}</p>
        {/** falta shipping y cuotas*/}
      </li>
    );
  }
}

export default ProductCard;