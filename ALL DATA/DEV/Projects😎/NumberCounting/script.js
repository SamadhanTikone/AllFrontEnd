let values = document.querySelectorAll(".num");
let interval =5000;


values.forEach((values)=>{
    
    let startValue = 0;
    let endValues = parseInt(values.getAttribute("data-val"));
    let duration = Math.floor(interval / endValues);
    let counter = setInterval(function(){
        startValue+= 1;
        values.textContent = startValue + "+";
        if(startValue== endValues){
            clearInterval(counter);
        }
    },duration)

   

})