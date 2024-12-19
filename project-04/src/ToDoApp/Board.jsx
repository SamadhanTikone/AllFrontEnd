    import PropTypes from 'prop-types';

    export default function Board({taskList , setTaskList}) {

        function handleDelete (id){
        setTaskList( taskList.filter((item , index )=> index !== id ))
        }
        
    return (
        <div className=''>

        <div className='relative' >
        {taskList.map((task, index)=> <div key={index} className='relative'>
        <h1  className='min-w-[320px ] max-w-[500px] text-wrap bg-black p-6 my-4 relative text-white  rounded-lg text-xl'
         > {task}</h1> 
        <button className='absolute top-4 ml-2  text-2xl text-red-500 right-4'onClick={()=>handleDelete(index)} >X</button> </div> )}
        
        </div>
        </div>
    );
    }
    Board.propTypes = {
        taskList: PropTypes.array,
        setTaskList : PropTypes.func,
    
    };
