import PropTypes from  "prop-types"
import {Button } from "@mui/material"
export default function ChangeName({setName}) {

    const handleChange = ()=>{
        setName("there")
    }
  return (
    <div>
    
      <Button variant="contained"  onClick={handleChange}>Contained</Button>
    </div>
  )
}
ChangeName.propTypes = {
    setName: PropTypes.func
}