import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/BLog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignIn from "../../Pages/SignIn/SignIn";
import TopicDetails from "../../Pages/TopicDetails/TopicDetails";
import Topics from "../../Pages/Topics/Topics";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: async () =>{
                    return fetch('http://localhost:5000/courses');
                },
                element: <Courses></Courses>
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: "/detail/:id",
                loader: async({params}) =>{
                    console.log(params.id);
                    return fetch(`http://localhost:5000/courses/${params.id}`);
                },
                element: <TopicDetails></TopicDetails>
            }
        ]
    },
    {path: '*', element: <Error></Error>}
])