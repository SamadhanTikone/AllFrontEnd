import Styles from "./Contact.module.css"
import {Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
       <nav className={Styles.navbar}>
        <h2>Contact</h2>
        <ul>


     
      
      <Link className={Styles.link} to="/"> <li>Home</li></Link>
      <Link className={Styles.link} to="/about"> <li>About</li></Link>
      <Link className={Styles.link} to="/login"> <li>Login</li></Link>


      </ul>
      
          

      </nav>
    </div>
  )
}
