import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";


export default function Layout() {
  return (
    <div>
      
      <NavBar/>
      <Outlet/>
      <Footer/>

    </div>
  )
}
