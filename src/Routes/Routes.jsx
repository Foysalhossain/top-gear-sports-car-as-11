import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EditForm from "../pages/MyToys/EditForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'myToys',
                element:
                    <PrivateRoute>
                        <MyToys></MyToys>
                    </PrivateRoute>
            },
            {
                path: 'addToy',
                element:
                    <PrivateRoute>
                        <AddToy></AddToy>
                    </PrivateRoute>,
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'viewDetails/:id',
                element:
                    <PrivateRoute>
                        <ViewDetails></ViewDetails>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`https://top-gear-sports-car-server.vercel.app/details/${params.id}`)
            },
            {
                path: 'editToy/:id',
                element: <EditForm></EditForm>,
                loader: ({ params }) => fetch(`https://top-gear-sports-car-server.vercel.app/addCategory/${params.id}`)
            }
        ]
    },
]);

export default router;