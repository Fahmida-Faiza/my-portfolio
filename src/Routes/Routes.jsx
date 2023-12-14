import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:
        [
            {
                path:'/',
                element:<Main></Main>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/skill',
                element:<Skill></Skill>
            },
            {
                path:'/project',
                element:<Project></Project>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            }
        ]
       
    },
]);

export default router;