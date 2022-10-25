import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Topics = () => {

    const [topics, setTopics] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setTopics(data));

    },[])

    return (
        <div>
            <h2>topics here: {topics.length}</h2>
        </div>
    );
};

export default Topics;