import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            setData(products);
            setFilter(products); // Set filter with fetched data
            setLoading(false);
        };
        
        getProducts();
    }, []);

    const Loading = () => (
        <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
    
    const filterProduct = (cat) => {
        const updatedList = data.filter((product) => product.category.toLowerCase() === cat.toLowerCase());
        setFilter(updatedList);
    };
    
    const ShowProducts = () => (
        <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <Link  to='/' className="btn btn-outline-dark me-2" >Home</Link>
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
            </div>
            {filter.map((product) => (
                <div className="col-md-3 mb-4" key={product.id}>
                    <div className="card h-100 text-center p-4">
                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                            <p className="card-text lead fw-bold">${product.price}</p>
                            <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

    return (
        <div>
        
            <div className="container m-50 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;
