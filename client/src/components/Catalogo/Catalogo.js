import React from 'react';
import Product from '../Product/product.js';
import Filter from '../Filter/Filter.js';
import SearchBar from '../SearchBar/SearchBar.js';
import s from './Catalogo.module.css'


const catalogo = ( { setSearchApp, search, setOrder, order, sortProducts, filterProducts}) => {


    return ( 
      <div className={s.container}>
         
        <SearchBar {...{search, setSearchApp}}/>
        <Filter {...{search, setOrder, order, sortProducts, filterProducts}}/>
        <div  >
        < Product {...{search, setSearchApp}}/>
        </div>
      </div>
      )
  };
  
  export default catalogo; 