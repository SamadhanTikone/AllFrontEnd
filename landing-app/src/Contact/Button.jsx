
import PropTypes from "prop-types"
import Styles from "./Contact.module.css"


export default function Button({name , icon , isOutline,}) {

  

  return (
    <div >
      
      <button   className={ isOutline ? Styles.secBtn : Styles.priBtn  }  > 
        {icon}  {name} 
        </button>
     
    

    </div>
  )
}

Button.propTypes= {
  name: PropTypes.string,
  icon: PropTypes.object,
  isOutline : PropTypes.bool,
  submit : PropTypes.bool,
  type : PropTypes.string,
  onSendData: PropTypes.func,


}
Button.defaultProps = {
  isOutline : false,
  submit : false,
}
