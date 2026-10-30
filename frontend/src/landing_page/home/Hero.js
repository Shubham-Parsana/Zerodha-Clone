import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <img src='media/images/homeHero.png' alt='Hero image' className='mb-5'/>
                <div className="col-md-12 text-center">
                    <h1 className="hero-title mt-5">Invest in everything</h1>
                    <p className="hero-subtitle">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button className="btn btn-primary hero-button p-2 fs-5" style={{width:"20%"}}>Signup Now</button>
                </div>    
            </div>
        </div>    
     );
}

export default Hero;