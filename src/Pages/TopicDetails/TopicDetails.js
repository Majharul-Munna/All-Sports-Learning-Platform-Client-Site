import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>topic details:</h2>
        </div>
    );
};

export default TopicDetails;