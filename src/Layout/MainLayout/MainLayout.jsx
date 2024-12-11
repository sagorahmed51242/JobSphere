import { Outlet } from "react-router-dom"
import Navbar from "../../Components/HomePageComponents/Navbar"
import Footer from "../../Components/HomePageComponents/Footer"

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <footer className="max-w-[1280px] mx-auto">
        <Footer />
    </footer>
    </>
  )
}

export default MainLayout