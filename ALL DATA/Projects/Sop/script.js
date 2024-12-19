console.log("hello");
let songIndex=0;

let audioElement = new Audio("1.mp3")

let playit = document.getElementById("playit");
let progressbar = document.getElementById("progress")
let gif= document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songitem"));



playit.addEventListener("click",function () {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            playit.classList.replace("fa-play-circle-o", "fa-pause-circle-o");
            // playit.classList.add("fa-stop-circle-o");
            gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
            playit.classList.replace("fa-pause-circle-o", "fa-play-circle-o");
            gif.style.opacity = 0;

        }

    })

audioElement.addEventListener("timeupdate",()=>{
console.log("time");
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
progressbar.value =progress; 
})

progressbar,addEventListener("change",()=>{
 audioElement.currentTime = (progressbar.value * audioElement.duration/100);
})
let songs =[
    {
        songName:"Welcome Bakc", filepath:"1.mp3", coverPath:"cover.jpg"
    },
    {
        songName:"abcdefghighl", filepath:"2.mp3", coverPath:"cover.jpg"
    },
    {
        songName:"kkkkkkkkkkkke Bakc", filepath:"3.mp3", coverPath:"cover.jpg"
    },
    {
        songName:"hhhhhhjjjc", filepath:"4.mp3", coverPath:"cover.jpg"
    },
    {
        songName:"Welcome Bakc", filepath:"5.mp3", coverPath:"cover.jpg"
    },
]
  
songItem.forEach((element,i) => {
    // console.log(element,i)
 element.getElementsByClassName("songname")[0].innerText = songs[i].songName;



})


// function play(){
//     console.log('hellogggggggggggggggggg');
// };

Array.from(document.getElementById("play")).forEach((element)=>{
    element.addEventListener("click",(e)=>{

    console.log(e.target);
    })
})