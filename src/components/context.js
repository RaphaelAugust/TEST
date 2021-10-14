import React , {useContext , useState , useEffect}   from 'react'

import auth from '../firebase'



        const authContext = React.createContext()

 
        
export function useAuth(){
    return useContext(authContext)
}

export default function AuthProvider({children}) {
    const [currentUser , setCurrentUser] = useState()
    const value = {
        currentUser
    }
    function signupp(email , password)
   { return auth.createUserWithEmailAndPassword(email,password)
   }
   useEffect(()=>{

    auth.onAuthStateChanged(user =>{
        if(user){
            
            setCurrentUser(user)
            
        }
        else{
            setCurrentUser("")
        }
    })
   },[])
    return (
        <div>
            <authContext.Provider value={value}>
                {children}

            </authContext.Provider>
            
        </div>
    )
}
