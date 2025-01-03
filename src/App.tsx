
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { Add } from "./pages/Add.tsx";
import { Error } from "./pages/Error";
import { RootLayout } from "./component/RootLayout";
import { CustomerProvider } from "./component/CustomerProvider";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { path: "/", element: <Dashboard /> },
                { path: "/add", element: <Add/> },
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
            <RouterProvider router={routes} />
        </CustomerProvider>
    );
}

export default App;
