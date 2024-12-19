import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types"

function Popup({close}) {
  return (
    <div className=" fixed inset-0 bg-black  bg-opacity-30 backdrop-blur-sm  flex flex-col items-center justify-center ">
        <div className="w-80 h-80 flex flex-col gap-10  bg-gray-600 border-2 border-white rounded-lg px-4   ">
        <button className="text-2xl place-self-end   -mt-10" onClick={close}> <IoCloseSharp />        </button>

        <h1 className="text-3xl font-bold text-center bg-transparent ">Popup here...</h1>
      <p className="bg-transparent text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt, consectetur odio earum nemo voluptatibus.</p>
      <button className=" border-2 bg-green-500 px-4 py-2 rounded-lg" onClick={close}>OK</button>

        </div>
     
    </div>
  )
}

export default Popup

Popup.propTypes ={
    close : PropTypes.func

}
