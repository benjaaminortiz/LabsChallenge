import React, {useState} from 'react'
import axios from 'axios'

const SearchBar = (props) => {

    const [search, setSearch] = useState('');
    const [product, setProduct] = useState([])

    const getProduct = (q) => {
        console.log(q)
        axios.get("http://localhost:3000/products?q=" + q).then(data => {
            console.log(data)
            setProduct(data.data.results)
        })
    };

    return (
        <div>
            <input type="text" placeholder='Buscar' value={search} onChange={(e) => {setSearch(e.target.value); getProduct(e)}}/><button>Go!</button>
        </div>
    )
}

export default SearchBar
