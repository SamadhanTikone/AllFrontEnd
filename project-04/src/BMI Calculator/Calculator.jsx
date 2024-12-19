import { useEffect, useState } from "react";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiValue, setBMIValue] = useState(null);
  const [message, setMessage] = useState(null);


  function calculateBMI() {
  
    if (height && weight) {
      setBMIValue(weight / (height / 100) ** 2);
    }else{
        setMessage("Enter Info")

    }
    
   
  }

  useEffect(()=>{
    
    if(bmiValue === null){
        setMessage("")
    }else if(bmiValue < 16 ) {
        setMessage ( "Severe Thinness")
    }else if(bmiValue == 16 && bmiValue == 17){
        setMessage("Moderate Thinness")
    }else if(bmiValue > 17 && bmiValue < 18.5){
        setMessage("Mild Thinness")
    } else if( bmiValue > 18.5 && bmiValue < 25 ){
        setMessage ( "Normal ")
    }else if(bmiValue >25 && bmiValue<30){
        setMessage("Overweight")
    }else if(bmiValue>30 && bmiValue<35 ){
        setMessage("Obese Class I")
    }else if(bmiValue >35 && bmiValue <40){
        setMessage("Obese Class II")
    }else if(bmiValue >40 && bmiValue <60){
        setMessage("Obese Class III (Danger)")
    }else{
        setMessage("Enter Correct Info")
    }
  },[bmiValue])
  return (
    <div>
      <label htmlFor="">Weight(kg): </label>
      <input
        type="text"
        placeholder="50"
        className="mb-4 p-3 rounded-lg"
        onChange={(e) => setWeight(e.target.value)}
        value={weight}
      />

      <br />

      <label htmlFor="">Height(cm): </label>
      <input
        type="text"
        placeholder="150"
        onChange={(e) => setHeight(e.target.value)}
        value={height}
        className="mb-4 p-3 rounded-lg"
      />

      <br />

      <button
        className="bg-green-500 px-4 py-2 rounded-lg m-auto ml-16 mt-4 "
        onClick={calculateBMI}
      >
        Calculate
      </button>

      {bmiValue && <p className="m-4 text-xl"> Your BMI index is : {bmiValue}</p>}



      <p className="m-4 text-xl"> {message}</p>
     
    </div>
  );
}
