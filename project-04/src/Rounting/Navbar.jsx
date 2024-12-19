import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    function handleNavigate(){
        navigate("/")
    }
  return (
    <div>
      <nav className="flex justify-around cursor-pointer">
        <h1 className="text-3xl py-4" onClick={handleNavigate}>React Router</h1>
       <ul className="flex">

        <li className="p-4 text-xl "> <Link to={"/"}>Home</Link></li>
        <li className="p-4 text-xl "> <Link to={"/about"}>About</Link></li>
        <li className="p-4 text-xl "> <Link to={"/contactUs"}>contactUs</Link></li>

       </ul>
        
        
      </nav>
    </div>
  )
}
