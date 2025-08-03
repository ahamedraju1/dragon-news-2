import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import HomePage from "../Pages/HomePage";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Auth from "../Layouts/Auth";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";
import Password from "../component/Password/Password";

const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: Home,
            children: [
                {
                    path: '',
                    element: <HomePage></HomePage>
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch('/news.json'),
                    hydrateFallbackElement: <Loading></Loading>
                }
            ]
        },

        {
            path: '/auth',
            element: <Auth></Auth>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login></Login>
                },
                {
                    path: '/auth/register',
                    element: <Register></Register>
                },

            ]
        },
        {
            path: '/auth/password',
            element: <Password></Password>
        },
        {
            path: '/news-details/:id',
            element:
                <PrivateRoute>
                    <NewsDetails></NewsDetails>
                </PrivateRoute>,
            loader: () => fetch('/news.json'),
            hydrateFallbackElement: <Loading></Loading>
        }
        ,
        {
            path: '/*',
            element: <h2>Error-404</h2>
        }
    ]);

export default router;  
