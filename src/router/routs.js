import About from "./../pages/about/About";
import Posts from "./../pages/posts/Posts";
import PostPage from './../components/PostPage';
import Login from "./../pages/login/Login";
import CreateUser from "./../pages/registration/CreateUser";
import ErrorPage from "./../pages/error/Error";

export const privateRoutes = [
    { path: '/about', element: <About /> },
    { path: '/posts', element: <Posts /> },
    { path: '/posts/:id', element: <PostPage /> },
    { path: '/error', element: <ErrorPage /> },
]
export const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/registration', element: <CreateUser /> },

]
