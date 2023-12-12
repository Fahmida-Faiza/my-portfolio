import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error";
import Main from "../Layout/Main";
import Home from "../components/Home";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Contact from "../components/Contact";
// import Error from "../components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:
        [
            {
                path:'/',
                element:<Home></Home>
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