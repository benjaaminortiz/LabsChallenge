import React, {useState, useEffect} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import s from './App.css';
import Catalogo from './components/Catalogo/Catalogo';

function App() {
  
  const [search, setSearchApp] = useState({
    array: [],
    word: "",
    filtered: [],
    });


  const [order, setOrder] = useState({
    size: "",
    sort: "",
  });      

  useEffect(() => {}, [search, order])

      
  const clone = matriz => matriz.map(i => (Array.isArray(i) ? clone(i) : i));


  const sortProducts = (sort) => {
    setSearchApp({
      ...search,
      filtered: search.array.sort((a,b) => 
      sort === "lower"
        ? a.price > b.price ? 1 : -1
      : sort === "higher"
        ? a.price < b.price ? 1 : -1
      : a.id < b.id ? 1  : -1
    )})
  };
 

  const filterProducts = (size) => {
   if (size === "All"){
     setSearchApp({
       ...search,
       filtered: clone(search.array)
     })
   } else {
     setSearchApp({
    ...search,
    filtered: search.array.filter(product => product.condition.toLowerCase() === size.toLowerCase())
    })
  }
};




  return (
    <div >
      <Router>
          <div className={s.app}>
          <Route
            exact path='/'><div><h1>Bienvenido!</h1></div></Route>
         
          <Route exact path='/'>
           <SearchBar {...{search, setSearchApp}}/>
          </Route>
          </div>
         
          <Route exact path='/catalogo'>
          <Catalogo {...{setSearchApp, search, setOrder, order, sortProducts, filterProducts}}/>
          </Route>
      </Router>
    </div>
  );
}

export default App;