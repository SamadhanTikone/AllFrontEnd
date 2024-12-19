import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FirstFrom() {

    const[message , setMessage] = useState(false)

    const notify = () => toast.error('Enter Valid Info', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        });
    const notify1 = () => toast.success('🍾 Your From is Submitted Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        });
    


    const {
         register, 
        handleSubmit,
         formState: { errors,isSubmitting, isSubmitSuccessful  , isValid } } = useForm();

    async function onSubmit (data){

        await new Promise ((resolve)=>{  setTimeout(resolve ,5000)})

        console.log(data);
        data && setMessage(false)

        

    };

    useEffect(()=>{
    
                
        {isValid && setMessage(true)}

    },[isValid])

  
  
    return (
        <>
        
        { isSubmitSuccessful ? <h1 className="text-3xl font-bold ">Thanks For Submitting From</h1> : <form onSubmit={handleSubmit(onSubmit)}      >

        <label htmlFor="FName">First Name :- </label>
        {errors.FName &&  <span className="absolute  text-red-500 -mt-7">This field is required</span>}

        <input type="text" id="FName"  {...register("FName", {required :true})} className="border-2 border-green-500"/>


        <label htmlFor="LName">  Last Name :- </label>
        {errors.LName &&  <span className="absolute  text-red-500 -mt-7">This field is required</span>}
        <input type="text" id="LName" {...register("LName", {required : true})} className="border-2 border-green-500"/>


        <label htmlFor="Age">  Age :- </label>
        {errors.Age &&  <span className="absolute text-red-500 -mt-12">Enter Age between 18 to 99</span>}
        <input type="number" id="Age" {...register("Age",{required: true ,  min: 18, max: 99} )} className="border-2 border-green-500"/>

        <label htmlFor="Mobile"className="mt-8">  Mobile :- </label>
        {errors.Mobile &&  <span className="absolute  text-red-500 mt-5">Enter Valid Mobile No.</span>}
        <input type="text" id="Mobile" {...register("Mobile",{required: true , minLength: 10, maxLength: 10} )} className="border-2 mt-12 border-green-500"/>


        <input type="submit" value={isSubmitting ? "Submitting" : "Submit"} onClick={ message ? notify1 : notify} disabled = {isSubmitting} className={`${isSubmitting ? "bg-green-400" : "bg-green-600"} py-2 px-4 rounded-lg ml-6`}/>
        <ToastContainer  />
      </form>

     } </>
      
    )
}

export default FirstFrom
