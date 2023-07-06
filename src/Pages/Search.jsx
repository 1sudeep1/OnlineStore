import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import "./search.scss"
function Search() {
    const [filteredList, setFilteredList] = new useState([]);
    const [searchParams] = useSearchParams();

    const query = searchParams.get("s");

    const productsData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        return response.json();
    };

    const { data, isLoading, error } = useQuery('Data', productsData);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    let updatedList = [...data];
    updatedList = updatedList.filter((item) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    useEffect(() => {
        setFilteredList(updatedList);
    }, []);
    return (
        <div>
            <div className="container search ">
                <div className="row">
                    <ul className="list-group list-group-flush">
                        {filteredList.map((item, index) => (
                            <li className="list-group-item py-5" key={index}>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-2">
                                        <Link to={`/product/${item.id}`}><img className='w-100' src={item.image} alt="" /></Link>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4><Link to={`/product/${item.id}`}>{item.title}</Link></h4>
                                        <p><Link to={`/product/${item.id}`}> Price: Rs {item.price}</Link></p>
                                    </div>

                                </div>


                            </li>
                        ))}

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Search
