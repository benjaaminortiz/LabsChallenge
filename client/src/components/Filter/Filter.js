import React from 'react';


const Filter = ({search, order, setOrder, sortProducts, filterProducts}) => {

    const Ordenar = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        })
        if (e.target.name === "size") {
            filterProducts(e.target.value)
        } else {
            sortProducts(e.target.value)
        }
    }

        return (
            <div className="filter">
                <div className="filter-result"> {search.array.length} resultados</div>
                <div className="filter-sort">
                    Filtrar por precio {"  "}
                    <select name="sort" value={order.sort} onChange={ Ordenar }>
                        <option>Latest</option>
                        <option value="lower"> Menor a Mayor </option>
                        <option value="higher"> Mayor a Menor </option>
                    </select>
                </div>
                <div className="filter-size">
                    Filtrar por estado {"  "}
                    <select name="size" value={order.size} onChange={  Ordenar }>
                        <option value="All">Todos</option>
                        <option value="New">Nuevos</option>
                        <option value="Used">Usados</option>
                    </select>
                </div>
            </div>
        )
    }

export default Filter; 
