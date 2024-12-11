import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import PageNotFound from "../Pages/404Page/PageNotFound";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "log-in",
                element: <LogIn/>
            },
            {
                path: "Sign-up",
                element: <SignUp/>
            }
        ]
    },
]);

export default router;