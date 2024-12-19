import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div >
      <ul className="flex  justify-between text-xl style-none">
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/about"}>About</Link>
        </li>
        <li>
            <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
            <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}
