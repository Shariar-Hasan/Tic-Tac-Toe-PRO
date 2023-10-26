import { Outlet } from "react-router-dom"
import AllCommonComponents from "./components/AllCommonComponents"
import Navbar from "./components/Navbar"



function App() {
  return (
    <div className="text-site">
      <AllCommonComponents />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
