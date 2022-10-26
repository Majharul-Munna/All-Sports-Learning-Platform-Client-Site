import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div>
            <div>
                <h2 className=' text-center my-3'> To See All Courses of
                    <span className=' text-orange-400 font-bold'> Sport Science </span>
                    <Link to="/courses"> Click Here </Link>
                </h2>
                <div className=' flex justify-center'>
                <img className=' w-3/4 flex justify-center mt-3 rounded' src="https://www.veritone.com/wp-content/uploads/2022/10/AI_sports-Featured-Header-1080x480.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;