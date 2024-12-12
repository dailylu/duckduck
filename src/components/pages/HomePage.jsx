import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../include/Header'
import Footer from '../include/Footer'
import Youtube from './Youtube'
import reel from '../../images/Reel.mp4'

const HeroSection = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Header: 페이지 상단에 고정 */}
            <Header />
        <div className="position-relative flex-grow-1">
            {/* Background Video */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
            <video className="w-100 h-100" style={{ objectFit: 'cover' }} autoPlay loop muted>
                <source src={ reel } type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
    
            {/* Overlay and Search Box */}
            <div className="container position-relative z-index-2" style={{ paddingTop: '24rem' , paddingBottom: '24rem' }}> {/* position-absolute는 자식 요소의 위치를 기준으로 삼기 때문에 마진값 적용이 안된다. padding값으로 주면 위아래 여백이 생긴다. >> */}
            <div className="row justify-content-center text-center text-white">
                <div className="col-md-8">
                <h1 className="display-4 mb-4">Welcome to Our Archaive</h1>
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for your favorite content"
                        aria-label="Search"
                        aria-describedby="search-button"
                    />
                    <a href='/' className="btn btn-dark" id="search-button" type="button">
                    Search
                    </a>
                </div>
                </div>
            </div>
        </div>
        </div>
            <Youtube />
        <Footer />
        </div>
    );
};

export default HeroSection;