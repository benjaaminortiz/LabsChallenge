import React from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import s from './SearchBar.module.css';

const SearchBar = ({setSearchApp, search}) => {

    function handleChange(e){
        setSearchApp({
            ...search,
            word: e.target.value
            });
    }

     function handleSubmit(e){
        if(!search.word){
            return alert ("Write a product name!")
        };
         axios.get (`http://localhost:3001/api/search?query=${search.word}`) 
        .then ((res) => {
            setSearchApp({
                array: res.data,
                word: search.word,
                filtered: res.data
                });
        })
    }
    
    
    return (
        <div>
            <div >
            <link integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
                <input className={s.searchbar} value = {search.word} type="text" name="" placeholder="Buscar" onChange = { (e) => handleChange (e) } />
                <a ><Link to = {search.word && `/catalogo`}> <button className = 'btn btn-info btn-m' type = "submit" onClick = { (e) => handleSubmit (e) } >Buscar</button></Link>
                <i></i>
                </a>
            </div>
        </div>
    )
    
}

export default SearchBar; 
