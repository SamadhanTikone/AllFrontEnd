let inputData = document.querySelector(".input");
      

let tasks = document.querySelector(".tasks");


function addTask(){

    if(inputData.value.length == 0){

        alert("Please Enter Something..")
    }
    else{
       
        tasks.innerHTML +=`
        <div class= "task">
            <span class = "task-name">
                ${inputData.value}
            </span>
            <button class="delete" ">
                        <i class="fa fa-trash-o fa-lg"></i>
            </button>
            </div>
        
        `;
        inputData.value= "";
        let currentTasks = document.querySelectorAll(".delete");
        for(let i=0;i<currentTasks.length;i++){
            currentTasks[i].onclick= function (){

                this.parentNode.remove();

            }
        }

        let completedTasks = document.querySelectorAll(".task");
        for(let i=0;i<completedTasks.length;i++){
            completedTasks[i].onclick= function (){

                this.classList.add("completed");

            }
        }

        for(let i=0;i<completedTasks.length;i++){
            completedTasks[i].ondblclick= function (){

                this.classList.remove("completed");

            }
        }
       
    }
}
