import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Courses = () => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setTopics(data));

    }, [])

    return (
        <div>
            <h2> <span className=' text-orange-500'>Learn with EX-</span> Courses: {topics.length}</h2>
            <div className='grid lg:grid-cols-3 gap-3 mt-5'>
                {
                    topics.map(topic => <div key={topics.id}>
                        <div className=''>
                            <div className="card w-4/5 bg-base-100 shadow-xl">
                                <figure><img className=' h-40 w-full' src={topic.img} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="">{topic.name}</h2>
                                    <p>{topic.des}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Get Access</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;