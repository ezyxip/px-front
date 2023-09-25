import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Welcome} from "./pages/welcome";
import * as React from "react";
import "./common.css"
import {Dummy} from "./pages/dummy";
import {LoginPage} from "./pages/login_page";

const router = createBrowserRouter([

    {
        path:"app/",
        element: <Welcome/>
    },
    {
        path:"app/login",
        element: <LoginPage/>
    },
    {
        path:"app/contacts",
        element: <Dummy/>
    },
    {
        path:"app/faq",
        element: <Dummy/>
    },
    {
        path:"app/manual",
        element: <Dummy/>
    },
    {
        path:"/app/admin/diagnostics",
        element: <Dummy/>
    },
    {
        path:"/app/admin/users",
        element: <Dummy/>
    },
    {
        path:"/app/admin/events",
        element: <Dummy/>
    },
    {
        path:"/app/manager/clients",
        element: <Dummy/>
    },
    {
        path:"/app/manager/masters",
        element: <Dummy/>
    },
    {
        path:"/app/manager/schedule",
        element: <Dummy/>
    },
    {
        path:"/app/manager/services",
        element: <Dummy/>
    },
    {
        path:"/app/master/schedule",
        element: <Dummy/>
    },
])


function App() {
    return (
          <React.StrictMode>
            <RouterProvider router={router}/>
          </React.StrictMode>
      );
}

export default App;
