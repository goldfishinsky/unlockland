import {createBrowserRouter} from "react-router-dom";
import BasicLayout from "@/layout/BasicLayout";
import MobileLayout from "@/layout/MobileLayout";
// import Share from "./layouts/Share";
import ErrorPage from "@/pages/Error";
import { isMobile } from 'react-device-detect';
import Home from "./pages";

const routes = isMobile ?
    // Mobile
    [{
        path: "/",
        element: <MobileLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: false,
            },
            {
                path: "share/:plotId",
                // element: <Share />
            }
        ]
    }]
    :
    // Desktop
    [{
        path: "/",
        element: <BasicLayout />,
        // errorElement: <ErrorPage />,
        // children: [
        //     {
        //         index: true,
        //     },
        //     {
        //         path: "share/:plotId",
        //         // element: <Share />
        //     }
        // ]
    }];

const router = createBrowserRouter(routes);

export default router;