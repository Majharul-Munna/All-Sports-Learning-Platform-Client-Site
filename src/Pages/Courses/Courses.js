import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftNav from '../../Shared/LeftNave/LeftNav';

const Courses = () => {

    const topics = useLoaderData();

    return (
        <div>




            <Container>
                <Row>
                    <Col lg="2">
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg="10">
                        <h2> <span className=' text-orange-500'>Sport Science</span> Courses: {topics.length}</h2>
                        <div className='grid lg:grid-cols-3 gap-3 mt-5'>
                            {
                                topics.map(topic => <div key={topic.id}>
                                    <div className=''>
                                        <div className="card w-4/5 bg-base-100 shadow-xl">
                                            <figure><img className=' h-40 w-full rounded-md' src={topic.img} alt="" /></figure>
                                            <div className="card-body">
                                                <h2 className="">{topic.name}</h2>
                                                <p>{topic.des}</p>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/detail/${topic.id}`}>
                                                        <button className="btn btn-primary">View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;