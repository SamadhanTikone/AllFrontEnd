import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      
<Link to="/"> <li>Home</li></Link>
<Link to="/about"> <li>About</li></Link>
<Link to="/login"> <li>Login</li></Link>

    </div>
  )
}
