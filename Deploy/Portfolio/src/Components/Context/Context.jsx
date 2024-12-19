
import { createContext, useState  } from "react"

export const Theme = createContext(true);



// eslint-disable-next-line react/prop-types
export default function ThemeContext({children}) {

    const[theme , setTheme] = useState(true);
    
  return (

    <Theme.Provider value={{theme , setTheme}}>

       {children}


    </Theme.Provider>

  )
}
