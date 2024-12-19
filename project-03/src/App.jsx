// import { createContext, useState } from 'react'
import { useState } from "react";
import "./App.css";
// import toast, { Toaster } from 'react-hot-toast';
import Popup from "./Popup/Popup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirstFrom from "./From/FirstFrom";
// import ChildA from './components/ChildA';
// import UserRef from './useRef/UserRef'
// const UserContext = createContext();

function App() {
  //  const [name ]= useState("SAMADHAN")
  //  const [ theme , setTheme] = useState(true)
  const [show, setShow] = useState(false);
  const notify = () => toast.success('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
   
    });
  // const notify1 = () => toast.success('Hello Samadhan!',
  //   {
  //     icon: '🍾',
  //     style: {
  //       borderRadius: '10px',
  //       background: '#333',
  //       color: '#fff',
  //     },
  //   }
  // );

  return (
    <>
      {/* <UserContext.Provider value={{name, theme , setTheme}}>

      <div className={`${theme ? "bg-gray-900 text-white" : "bg-white text-black"} w-80 h-80 border-red-500  flex justify-center items-center border-2`}>
      <ChildA/>
      </div>

    </UserContext.Provider> */}
      {/* <UserRef/> */}
      <button
        onClick={() => setShow(!show)}
        className="flex justify-center w-40 mt-12  bg-violet-500  items-center"
      >
        Click Me!!
      </button>
      {show && <Popup close={() => setShow(false)} />}
      {/* <button onClick={notify1}>Make me a toast</button>
      <Toaster /> */}


      <button onClick={notify}>Notify!</button>
        <ToastContainer  />

        <FirstFrom/>

     
    </>
  );
}

export default App;
// export {UserContext}
