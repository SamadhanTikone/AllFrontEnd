import { useEffect, useState } from "react"


export default function Timer() {
    const[time, setTime]=useState(0)
    const[active, setActive]=useState(false)
    function handleStart(){
       setActive(true)
    }
    function handleStop(){
        setActive(false)
        
    }

    function handleReset(){
        if(active === false){
            setTime(0)
        }
    }

    useEffect(()=>{

        let interval ; 

        if(active ){

           interval =  setInterval(()=>{
                setTime(time => time + 10)

                        },10)
        }
        else{
            
            clearInterval(interval)
        }

        return () => clearInterval(interval);
    },[active])

 
    const minutes = Math.floor(time / 60000); // 1 minute = 60000ms
    const seconds = Math.floor((time % 60000) / 1000); // Remainder after minutes
    const milliseconds = time % 1000; // Remainder after seconds

  return (
    <div>
      <p className="text-4xl">Timer: {minutes}.{seconds}.{milliseconds.toString().padStart(2, "0")} seconds</p>

{active ?       <button onClick={handleStop} className="px-4 py-2 bg-red-500 rounded-lg text-lg mt-4 mr-4">Stop</button>
 :        <button onClick={handleStart} className="px-4 py-2 bg-green-500 rounded-lg text-lg mr-3 mt-4">Start</button>
}
      <button onClick={handleReset} className="px-4 py-2 bg-red-500 rounded-lg text-lg mt-4">Reset</button>
    </div>
  )
}
