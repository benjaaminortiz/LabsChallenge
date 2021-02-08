import React, {useEffect} from 'react'
import ProductCard from '../ProductCard/ProductCard'
import s from './Product.module.css'
const Product = ({search}) => {

    useEffect (() => { }, [search])

    if(search.filtered.length) {
        return (
            <div  className='card'>
                <a href="back2top"></a>
                <div className="cardscontent">
                     {search.filtered.map(c => 
                     <ProductCard
                      img={c.thumbnail}
                      name={c.title}
                      price={c.price}
                      currency={c.currency_id}
                      condition={c.condition}
                      stock={c.available_quantity}
                     />)}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
}
export default Product
