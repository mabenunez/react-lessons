import React, { Component } from 'react';
//import SearchInput from './SearchInput'
import '../../App.css';

class SearchBar extends Component {
    handleChange(e) {
        const val = e.target.value
        this.props.handleCallback(val)
    }
  render(){
    return (
        <header>
          <h2>STARTUPS ARGENTINAS</h2>
          {/* <SearchInput handleCallback={(val) => this.props.handleCallback(val)}></SearchInput> */}
          <input placeholder={'Buscar'} onChange={(e) => this.handleChange(e)}/>
          <button>Agregar startup</button>
        </header>
    )
  }
}
export default SearchBar;