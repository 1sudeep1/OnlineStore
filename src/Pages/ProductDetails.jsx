import React, {useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import {useParams } from 'react-router-dom';

function ProductDetails() {
  let { pid } = useParams();

//data fetched by useEffect
  // const [productDetail, setProductDetail] = useState([]);
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${pid}`)
  //     .then((res) => res.json())
  //     .then((data) => setProductDetail(data))
  // }, [])
  const productsDetail = async () => {
    
    const response = await fetch(`https://fakestoreapi.com/products/${pid}`);
    return response.json();
  };

  const {data, isLoading, error} = useQuery('Data', productsDetail);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='container details'>

      <div className="row align-items-center">
        <div className="col-lg-5">
          <img className='w-75' src={data.image} alt="" />
        </div>
        <div className="col-lg-7">
          <h2>{data.title} </h2>

          <p className='my-4'>{data.description}</p>
          <h5>Price: Rs {data.price}</h5>
          <button className='btn btn-danger my-4'>Buy Now</button>
         
        </div>
  
      </div>




    </div>
  )
}

export default ProductDetails
