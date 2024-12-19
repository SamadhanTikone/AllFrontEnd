import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, TextField,Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';




export default function Twitter() {
  return (
    <>
  
    <div className='   flex justify-center items-center h-screen'>
      <div className="container bg-white shadow-lg  w-[600px] rounded-lg relative flex flex-col justify-center items-center  ">

<CloseIcon sx={{color:"black", left:"0",top:"0", cursor:"pointer", position:"absolute"}}/>
 <TwitterIcon sx={{ color: '#1DA1F2', fontSize:"40px", marginTop:"10px" }}/>


      <h1 className='my-4 text-[28px] font-bold text-black'>Sign in to Twitter</h1>

      
      <Button variant="outlined" sx={{color:"black" ,bgcolor:"white" , padding:"10px ",width:"320px" , marginBottom:"20px", borderRadius:"40px"}}> <GoogleIcon sx={{color:"#4285F4", marginRight:"10px"}}/> Sign in with Google</Button>


      <Button variant="outlined" sx={{color:"black" ,bgcolor:"white" , padding:"10px ",width:"320px", marginBottom:"20px", borderRadius:"40px"}}> <AppleIcon sx={{fontSize:"30px", marginRight:"10px"}}/> Sign in with Google</Button>


      <Divider  variant="middle" flexItem sx={{ borderColor:"white", width:"70%",marginLeft:"100px",marginBottom:"5px"}} ><Typography sx={{color:"black"}}>or</Typography></Divider>


      <TextField id="outlined-basic" label=" Email or Phone Number" variant="outlined" sx={{width:"320px",color:"white",borderColor:"white",borderRadius:"40px",marginBottom:"20px"}} />


      <Button variant="contained" sx={{bgcolor:"black" ,color:"white", width:"320px",borderRadius:"40px",padding:"10px",marginBottom:"20px"}}>Next</Button>

      <Button variant="outlined" sx={{color:"black",width:"320px",borderRadius:"40px",marginBottom:"20px", padding:"10px"}}>Forget password?</Button>


      </div>
    </div>
    </>
  )
}
