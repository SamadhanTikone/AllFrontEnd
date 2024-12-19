import PropTypes from "prop-types"
import useHooks from "./useHooks"
export default function Practice({isLoggedIn, userName}) {

  const {count} = useHooks();
  return (
    <div>

      {count}
    { isLoggedIn ?   <h1>Welcome {userName}</h1> : <h1> <h1/>Please Login</h1>}
    </div>
  )
}

Practice.propTypes= {
  userName: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool,
}
Practice.defaultProps = {
  isLoggedIn:false,
  userName: "Guest"
}