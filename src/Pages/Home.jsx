// import React, { useEffect, useState } from 'react'
import "./home.scss"
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

function Home() {

    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data))
    // }, [])

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
    return (
        <section>
            <div className="container home">
                <h3 className="heading">All Products</h3>
                <div className="d-flex flex-wrap justify-content-between ">
                    {data.map((a, i) => (
                        <div key={i} className="card my-4" style={{ width: '16rem' }}>
                            <Link to={`/product/${a.id}`}><img src={a.image} className="card-img-top img-fluid" alt="..." /></Link>
                            <div className="card-body">
                                <h5><Link to={`/product/${a.id}`}>{a.title}</Link></h5>
                                <p className="card-text"><Link to={`/product/${a.id}`}>{a.description}</Link></p>
                                <p><Link to={`/product/${a.id}`}>Price: Rs {a.price}</Link></p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Home
