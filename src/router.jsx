import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "./layouts/home.layout";
import Home from "./pages/Portfolio";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import AdminLayout from "./layouts/admin.layout";
import BlogLayout from "./layouts/blog.layout";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path:'',
                element: <Home />,
            },
        ],
    },
    {
        path: "/blog",
        element: <BlogLayout />,
        children: [
            {
                path:'',
                element: <Blog />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path:'',
                element: <Admin />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]);