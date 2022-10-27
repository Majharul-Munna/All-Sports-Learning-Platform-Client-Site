import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <div className='flex justify-center'>
                <div className="card w-2/4 bg-base-100 shadow-xl">
                    <figure><img className=' h-96 w-full rounded-md' src={course.img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="">{course.name}</h2>
                        <p>{course.des}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/detail/${course.id}`}>
                                <button className="btn btn-primary">Get Access</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicDetails;