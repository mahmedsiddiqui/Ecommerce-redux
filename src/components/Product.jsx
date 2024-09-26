import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import Navbar from './Navbar';

const Product = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    setCount(count + 1);
  };
  const delCounter = () => {
    if (count < 1) {
      setCount(0)
    }else{
    setCount(count - 1);}
  };

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const Loading = () => (
    <>
      <div className="d-flex justify-content-center">
        <Skeleton height={400} width={400} />
        <div className="ms-4">
          <Skeleton height={50} width={300} />
          <Skeleton count={3} height={20} width={500} />
        </div>
      </div>
    </>
  );

  const ShowProduct = () => (
    <>
      <div className="col-md-6">
        <img src={product.image} alt={product.title} height="400px" width="400px" />
      </div>

      <div className="col-md-6">
        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
        <h1 className='display-5'>{product.title}</h1>
        <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h3 className='display-6 fw-bold my-4'>
          ${product.price}
        </h3>
        <p className="lead">{product.description}</p>
        <button
          onClick={() => {
            addProduct(product);
            incrementCounter();
          }}
          className="btn btn-outline-dark px-4 py-2 ms-2 me-2"
        >
          Add to Cart 
        </button>
        <button
          onClick={() => {
            addProduct(product);
            delCounter();
          }}
          className="btn btn-outline-dark px-4 py-2 ms-2 me-2"
        >
         Delete item
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Pass count as a prop */}
      <Navbar count={count} />
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : product ? <ShowProduct /> : <h5>Product not found</h5>}
        </div>
      </div>
    </>
  );
};
export default Product;
