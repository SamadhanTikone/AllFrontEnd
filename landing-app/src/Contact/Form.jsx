import Button from "./Button"
import { MdMessage } from 'react-icons/md';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Styles from "./Contact.module.css"
import { useState } from "react";


export default function Form() {

  const [name , setName] = useState();
  const [show , setShow] = useState(false);

  function  handleSubmit(e){

    setName(e.target[0].value)
    e.preventDefault();
    setShow(true)
  
  }
   
  return (
    <>
          <p className={Styles.p}>{show  ? ` ${name} , Thanks for Submitting Form ` :  <div className={Styles.main}>
      <section className={Styles.contactSection}>

            <div className={Styles.contactForm}>

            <div className={Styles.topBtn}>
                <Button name="Contact Via Chat" icon={<MdMessage fontSize="24px"/>}/>
                <Button name=" Via Phone" icon={<FaPhoneAlt fontSize="24px"/>}/>
                </div>
                <Button name=" Contact Via Email"  isOutline= {true} icon={<MdEmail fontSize="24px"/>}/>

            </div>


            <form className={Styles.contactForm} onSubmit={handleSubmit}>

                
                <div className={Styles.form}>

                <div className={Styles.form_control}>
                    <label htmlFor="name">Name</label>
                     <input type="text" id="name" required />
                </div>
                <div className={Styles.form_control}>
                    <label htmlFor="name">Email</label>
                     <input type="text" id="name" required />
                </div>
                <div className={Styles.form_control}>
                    <label htmlFor="name" >Description</label>
                    <textarea name="Description" id="Description" rows={8} required></textarea >
                </div>
                </div>

                
                < Button name="Submit"  type="submit"/>

             </form>


               
      </section>
      <div className={Styles.imgContact}>
                

                <img src="./public/Images/customer.png" alt="" />


              </div>

    </div>}</p>

   
   
    </>
  )
}
