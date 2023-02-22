import About from "./../pages/about/About";
import Posts from "./../pages/posts/Posts";
import Error from "./../pages/error/Error";
import PostPage from './../components/PostPage';
import Login from "./../pages/login/Login";
import CreateUser from "./../pages/registration/CreateUser";

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