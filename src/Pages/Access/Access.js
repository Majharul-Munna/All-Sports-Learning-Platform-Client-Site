import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Access = () => {
    const course = useLoaderData();
    return (
        <div>

            <h2>Course Topic: {course.name}</h2>
            
        </div>
    );
};

export default Access;