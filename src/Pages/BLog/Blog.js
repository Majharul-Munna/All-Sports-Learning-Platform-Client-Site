import React from 'react';

const Blog = () => {
    return (
        <div className=' flex-auto ml-96'>
            <div className="card w-3/4 mt-5 shadow-xl">
                <h2 className="card-title p-4">What are CORS?</h2>
                <h6 className=' px-5 pb-3'>CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. The same-origin security policy forbids cross-origin access to resources.</h6>
            </div>
            <div className="card w-3/4 mt-5 shadow-xl">
                <h2 className="card-title p-4">Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h6 className=' px-5 pb-3'>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. <br />
                    Other options to implement authentication:<br />
                    STYTCH. <br />
                    Ory. <br />
                    Supabase. <br />
                    Okta. <br />
                    PingIdentity. <br />
                    Keycloak. <br />
                    Frontegg. <br />
                    Authress.</h6>
            </div>
            <div className="card w-3/4 mt-5 shadow-xl">
                <h2 className="card-title p-4">How does the private route work?</h2>
                <h6 className=' px-5 pb-3'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</h6>
            </div>
            <div className="card w-3/4 mt-5 shadow-xl">
                <h2 className="card-title p-4">What is Node? How does Node work?</h2>
                <h6 className=' px-5 pb-3'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</h6>
            </div>
        </div>
    );
};

export default Blog;