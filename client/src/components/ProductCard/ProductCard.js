import React from 'react';
import s from './ProductCard.module.css'

const productCard = ({img, name, price, condition, stock, currency}) => {

 
    return (
        <div>
            <div  className={s.container}>
                <div className = {s.imagen}>
                <img src={img} alt="Product" class='card-img-top'/>
                </div>
                <div className='card-body'>
                    <div className='card-title'>{name}</div> <br/>
                    <div classNAme='card-text'>
                    <div id="price">{currency}{price}</div> <br/>
                    <div>{condition}</div><br/>
                    <div>Stock: {stock}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productCard;