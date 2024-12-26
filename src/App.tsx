import { createBrowserRouter, RouterProvider } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { Add } from "./pages/Add.tsx";
import { Error } from "./pages/Error";
import { RootLayout } from "./component/RootLayout";
import { ItemProvider } from "./component/ItemProvider";
import { CustomerProvider } from "./component/CustomerProvider";
import { Update } from "./pages/Update.tsx";
import {Delete} from "./pages/Delete.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                { path: "/", element: <Dashboard/> },
                { path: "/add", element: <Add/> },
                { path: "/update", element: <Update/> },
                { path: "/delete", element: <Delete/> },

            ],
            errorElement: <Error />,
        },
        {
            path: "*",
            element: <Error />,
        },
    ]);

    return (
        <CustomerProvider>
            <ItemProvider>
                <RouterProvider router={routes} />
            </ItemProvider>
        </CustomerProvider>
    );
}

export default App;
