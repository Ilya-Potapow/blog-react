import About from "./../pages/About";
import Posts from "./../pages/Posts";
import Error from "./../pages/Error";
import PostPage from './../components/PostPage';
import Login from "../pages/Login";
import CreateUser from "../pages/CreateUser";

export const privatRouts = [
    { path: '/about', element: <About /> },
    { path: '/posts', element: <Posts /> },
    { path: '/posts/:id', element: <PostPage /> },
    { path: '/error', element: <Error /> },
]
export const publickRouts = [
    { path: '/login', element: <Login /> },
    { path: '/registration', element: <CreateUser /> },

]