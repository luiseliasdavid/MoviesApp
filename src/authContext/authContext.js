import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
         onAuthStateChanged, 
         signInWithEmailAndPassword,
         signOut,
         GoogleAuthProvider,
         signInWithPopup
         } from "firebase/auth";
import { auth } from "../firebase";

export const authContext= createContext()

export const useAuth = () => {
   const context = useContext(authContext)
   if(!context) throw new Error('there is no provider')
   return context
}


export function AuthProvider ({children}) {

 const [user, setUser] = useState(null)  
    
const singUp=  async (email,password) => {
     const userCredencials = await createUserWithEmailAndPassword(auth,email,password);
     
}

const login = async (email,password) => {
    await signInWithEmailAndPassword (auth,email,password);
}

const logout = async ()=> {
    await signOut(auth)

}
const loginWithGoogle = ()=>{
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
}


useEffect(()=>{
onAuthStateChanged(auth, currentUser => {
setUser(currentUser)
})
})

    return ( 
        <authContext.Provider value={{singUp,login, logout,user,loginWithGoogle}}> {children} </authContext.Provider>
    )
}