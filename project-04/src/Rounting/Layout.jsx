import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";


export default function Layout() {
  return (
    <>
    <Navbar/>
    <SideBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
