import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import HomePage from "../Pages/HomePage";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path:'/',
            Component: Home,
            children: [
                {
                    path: '',
                    element: <HomePage></HomePage>
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader: ()=> fetch('/news.json')
                }
            ]
        },

        {
            path: '/auth',
            element: <h2> Authentication </h2>
        },
        {
            path: '/news',
            element: <h2> News</h2>
        }
        ,
        {
            path: '/*',
            element: <h2>Error-404</h2>
        }
    ]);

  export default router;  
