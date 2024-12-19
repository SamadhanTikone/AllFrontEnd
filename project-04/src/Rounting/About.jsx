import { useNavigate } from "react-router-dom"


export default function About() {
  const navigate = useNavigate()

  function handleNavigate(){
    navigate("/")
  }

  return (
    <div className="h-[65vh] mt-10  flex justify-center items-center ">

  
    <div className="w-[60%]">
        <h1 className="text-3xl my-4"> About Us </h1>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus commodi, reprehenderit unde iusto dolore dolorem quam rerum. Numquam alias beatae nisi eveniet veritatis voluptate quisquam asperiores, corrupti quos repellat vel dolores similique ad tempora ratione architecto et? Sint assumenda quam expedita ipsa odit esse unde aperiam explicabo harum quo! Id aperiam inventore eum earum placeat! Cupiditate fuga minus, vero totam aliquid deserunt eveniet eum similique aperiam nulla hic! Dolor adipisci placeat cupiditate magni id laudantium consectetur excepturi esse qui, ad quae deleniti maiores labore optio rerum? Minima cumque laboriosam dolores ducimus eaque inventore, earum explicabo eveniet corporis nostrum corrupti ratione.</p>

        <button className="my-4 bg-green-500 p-4 rounded-lg" onClick={handleNavigate}>Got to Home</button>
        </div>
      
    </div>
  )
}
