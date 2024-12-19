import {  useRef, useState } from "react"


export default function UserRef() {
    // const[count, setCount] = useState(0);
    // let val = useRef(0);
    // const btnRef =  useRef();

    // function handleIncrement(){
    //   val.current = val.current + 1;
    //   console.log(val.current);
          
    //     setCount(count + 1)
    // }

    // function handleClick(){
    //   btnRef.current.style.backgroundColor = "green"
    // }

    // useEffect(()=>{
     
    //   console.log("rendered");
      
    // })

    const [time , setTimer] = useState(0);
    let timer = useRef(null);

    function handleStart(){
        if(time==0) { timer.current = setInterval(()=>{
        setTimer(time=> time + 1)
      },1000)}

      
      

    }

    function handleStop(){
      clearInterval(timer.current);
      timer.current= null;

    }
    function handlerReset(){
      setTimer(0)
    }
  return (
  <>
  
  {/* <div>
        <h1>Count : {count}</h1>
      <button onClick={handleIncrement} 
      ref={btnRef}
      className="bg-yellow-400 border-2 p-2 border-green-600 rounded-lg">
        Increment
        </button>

        <button onClick={handleClick} className="border-white border-2 p-2">
          chNGE COLOR

        </button>
    </div> */}

    <h1>StopWatch : {time}</h1>

    <button onClick={handleStart} className="border-2 border-white p-2 rounded-lg mr-2 ">Start</button>
    <button onClick={handleStop} className="border-2 border-white p-2 rounded-lg mr-2 ">Stop</button>
    <button onClick={handlerReset} className="border-2 border-white p-2 rounded-lg mr-2 ">Reset</button>

  </>
  )
}
