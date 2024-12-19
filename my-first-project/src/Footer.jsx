import React from "./assets/react.svg";
function Card(){
const style = {
    width:"400px",

}
    return(
 
        <>
        <div className="card" style={style}>
            <img src={React} alt="Profile Picture" />
            <h2 className="headings">Samadhan Tikone</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati cupiditate facere sint impedit repudiandae.</p>
        </div>
        </>

    );
}
export default Card