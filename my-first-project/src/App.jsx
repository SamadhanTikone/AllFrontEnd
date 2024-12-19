import { useState } from "react";
import NewComponent  from "./NewComponent";
import TextArea  from "./TextArea";
import Footer  from "./Footer";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {

  const [mode , setMode] = useState("light");

  function toggleDarkMode() {
    if(mode=== "light"){
      setMode("dark");
      let body = document.querySelector("body");
      body.style.backgroundColor = "#212529";
    }
    else{
      setMode("light");
      let body = document.querySelector("body");
      body.style.backgroundColor = "white";

    }
}
  return(
  <>
  <createBrowserRouter>

<NewComponent mode={mode} toggleDarkMode={toggleDarkMode}/>
<div className="container my-3">
<TextArea mode={mode} toggleDarkMode={toggleDarkMode}/>
<RouterProvider>
  <Route path="/footer">
  <Footer/>
    </Route>
    </RouterProvider>
{/* <Footer/> */}
</div>
</createBrowserRouter>

  </>
  );
}

export default App
