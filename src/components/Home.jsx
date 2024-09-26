import React from 'react'
import myImage from './hero image.jpg';
import Products from './Products';
import Navbar from './Navbar';
const Home = () => {
    return (
        <>
          <Navbar/>
            <div className="hero">
                <div className="card text-bg-dark border-0 ">
                    <img height="550px" src={myImage} alt='' />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ">
                        <div className="container">

                            <h5 className="card-title  display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
                            <p className="card-text  lead fs-2 ">CHECK OUT ALL THE TRENDS</p>

                        </div>
                    </div>
                </div>
                <Products/>
            </div>
        </>
    )
}

export default Home
