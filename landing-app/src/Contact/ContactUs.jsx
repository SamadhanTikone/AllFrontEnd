import Styles from "./Contact.module.css"
import Navbar from "./Navbar";
import Info from "./Info";
import Form from './Form';
export default function ContactUs() {


  return (
    <div className={Styles.mainContainer}>
     <Navbar/>
     <Info/>
     <Form/>
      
    </div>
  )
}
