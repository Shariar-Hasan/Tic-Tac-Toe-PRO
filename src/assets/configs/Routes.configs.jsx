import { createBrowserRouter } from "react-router-dom"
import Home from "../../pages/Home"
import Contributors from "../../pages/Contributors"
import NotFound from "../../pages/NotFound"
import SinglePlayerPage from "../../pages/SinglePlayerPage"
import MultiPlayerPage from "../../pages/MultiPlayerPage"
import TournamentPage from "../../pages/TournamentPage"
import App from "../../App"
import About from "../../pages/About"
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
        title: "Single Player",
        isNavItem: false,
        isVisible: true,
        path: "/single_player_play",
        element: <SinglePlayerPage />,
        children: []
    },
    {
        title: "Multiple Player",
        isNavItem: false,
        isVisible: true,
        path: "/multiple_player_play",
        element: <MultiPlayerPage />,
        children: []
    },
    {
        title: "Tournament",
        isNavItem: false,
        isVisible: true,
        path: "/tournament",
        element: <TournamentPage />,
        children: []
    },
    {
        title: "Page Not Found",
        isNavItem: false,
        isVisible: true,
        path: "/*",
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
