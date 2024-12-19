// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

function TextArea(props){
    

    const toUpperCase = ()=>{

        setText(text.toUpperCase());

    }

    const toLowerCase= ()=>{
        setText(text.toLowerCase())
    }


    const Clear = ()=>{
        setText("")
    }
    const changedThe = (event)=>{
      
        setText(event.target.value)
    }

    function copyText() {
        const textarea = document.getElementById("myTextarea");
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices
        
        navigator.clipboard.writeText(textarea.value)
    }
    const [text , setText] = useState("")


    return(
        <>
        <div data-bs-theme={props.mode}>
<div   >
  <h2 className={`text-${props.mode === "light" ? "dark" : 'light'} `}>Enter text here:- </h2>
  <textarea className="form-control" id="myTextarea" rows="8" value={text} onChange={changedThe} placeholder='Enter your text here.......'></textarea>
  <button className="btn btn-primary mx-4 my-3" onClick={toUpperCase}>To  UpperCase</button>
  <button className="btn btn-primary mx-4 my-3" onClick={toLowerCase}>To  LowerCase</button>
  <button className="btn btn-primary mx-4 my-3" onClick={Clear}>To  Clear</button>
  <button className="btn btn-primary mx-4 my-3" onClick={copyText}>Copy Text</button>
</div>

<div className={`text-${props.mode === "light" ? "dark" : 'light'} `}>
    <h1 className='my-4'>Your text Summary.</h1>
    <p>{text.split(' ').length } Words and {text.length} characters</p>
    <p>{text.split(' ').length * 0.008 }  Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length <=0 ? "Enter something in ☝️ box to preview here 👉 " :text} </p>
</div>

</div>
        </>
    );
}

export default TextArea