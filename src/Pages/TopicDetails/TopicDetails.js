import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <h2>topic details: {course}</h2>
        </div>
    );
};

export default TopicDetails;