import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [topics, setTopics] = useState([]);

    useEffect( () =>{
        fetch('https://ex-surver-majharul-munna.vercel.app/courses')
        .then(res => res.json())
        .then(data => setTopics(data));

    },[])

    return (
        <div>
            <h2>Total Courses: {topics.length}</h2>
            <div>
                {
                    topics.map(topic => <p key={topic.id}>
                        <Link to={`/detail/${topic.id}`}>{topic.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;