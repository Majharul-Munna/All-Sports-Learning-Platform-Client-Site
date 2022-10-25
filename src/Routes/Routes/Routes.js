import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Courses from "../../Pages/Courses/Courses";
import TopicDetails from "../../Pages/TopicDetails/TopicDetails";
import Topics from "../../Pages/Topics/Topics";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: "/topic/:id",
                element: <Topics></Topics>
            },
            {
                path: "/topic/detail/:id",
                element: <TopicDetails></TopicDetails>
            }
        ]
    }
])