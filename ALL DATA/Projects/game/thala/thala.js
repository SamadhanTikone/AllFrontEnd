var l ="Thala For Reason";
    function print()
{

var button = document.getElementById("input1").value;
var c1 = button.length;

 function isNumeric(button) { 
      return !isNaN(parseFloat(button)) && isFinite(button); 
}
 let num = isNumeric(button);
 console.log(num);
 if( num==true){
    // alert("hello");
         let r1 =button.split("");
         console.log(r1);
 
         let sum =0;
         var r2 = r1.map(Number);
         console.log("Sum is " + sum)

          r2.forEach(x => {
    sum += x;
});
var r3 = sum;

    if(r3==7){
        document.getElementById("massage").innerHTML=  `${button } :  ${ l}`;
    }
    if(r3>7){
        document.getElementById("massage").innerHTML=  ` "Sorry!, but you are not "Thala for Reason" `;

    }
    if(r3<7){
        document.getElementById("massage").innerHTML=  ` "Sorry!, but you are not "Thala for Reason" `;
 
    }
    console.log("Sum is " + r3);


}

 if(c1=="7"){
        document.getElementById("massage").innerHTML=  `${button } : ${ l}`;
    }
    if(c1>"7"){
        document.getElementById("massage").innerHTML=  ` "Sorry!, but you are not "Thala for Reason" `;

    }
    if(c1<"7"){
        document.getElementById("massage").innerHTML=  ` "Sorry!, but you are not "Thala for Reason" `;

 
    }
    

}