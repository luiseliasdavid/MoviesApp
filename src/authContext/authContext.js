import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const authContext= createContext()

export const useAuth = () => {
   const context = useContext(authContext)
   if(!context) throw new Error('there is no provider')
   return context
}


export function AuthProvider ({children}) {
    
const singUp=  async (email,password) => {
     await createUserWithEmailAndPassword(auth,email,password);
}


    return ( 
        <authContext.Provider value={{singUp}}> {children} </authContext.Provider>
    )
}