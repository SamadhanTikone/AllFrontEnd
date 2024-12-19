console.log("hello world");

let array1 = [10,20,30,{name : "samadhan"},[10,20]];

console.log(array1[3]);

let firstObject = {
    name : "Samadhan",
    age : 23,
    gender : "Male",
    array : [10,20,30]
}

console.log(firstObject);
console.log(firstObject.array[0]);


let functionValue = function (){
    console.log("Hello");
}
functionValue();
console.log(functionValue);

let secondVariable = 20;

secondVariable = 40;
console.log(secondVariable);

console.log(2**5);


const compare1 = true && 300 +5 ===  305;
const compare2 = !compare1;
const compare3 = true ;
console.log(compare2);

const array2 = [10,20,30,2];
const obj3 = {
age :20,
exp:10
}

const result = (obj3.exp === (array2[1]/ array2[3]));
console.log(result);
const obj4 = {
    mobj1 : {
        price : 100 ,
        quantity : 5

    },
    mobj2 : {
        price : 150 ,
        quantity : 2

    }

};

const array3 =[ obj4.mobj1, obj4.mobj2];

console.log(array3);

const result3 = (array3[0].price * array3[0].quantity) > (array3[1].price * array3[1].quantity);
console.log("Heloo "+ result3)



