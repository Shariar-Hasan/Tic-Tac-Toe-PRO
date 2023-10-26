import { Navigate, createBrowserRouter } from "react-router-dom"
import Home from "../../pages/Home"
import Contributors from "../../pages/Contributors"
import NotFound from "../../pages/NotFound"
import App from "../../App"
import About from "../../pages/About"
import GamePage from "../../pages/GamePage"
export const routeDatas = [
    {
        title: "Home",
        isNavItem: true,
        isVisible: true,
        path: "/",
        element: <Home />,
        children: []
    },
    {
        title: "About",
        isNavItem: true,
        isVisible: true,
        path: "/about",
        element: <About />,
        children: []
    },
    {
        title: "Contributors",
        isNavItem: true,
        isVisible: true,
        path: "/contributors",
        element: <Contributors />,
        children: []
    },
    {
        title: "Game Board",
        isNavItem: false,
        isVisible: true,
        path: "gamemode/:mode",
        element: <GamePage />,
        children: []
    },
    {
        title: "Page Not Found",
        isNavItem: false,
        isVisible: true,
        path: "/*",
        element: <Navigate to="/404" />,
        children: []
    },
    {
        title: "Page Not Found",
        isNavItem: false,
        isVisible: true,
        path: "/404",
        element: <NotFound />,
        children: []
    },
]
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            ...routeDatas.map(({ path, children, element, isVisible }) => isVisible && ({ path, children, element }))
        ]
    },
])
