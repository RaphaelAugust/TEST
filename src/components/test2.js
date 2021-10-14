import React ,{useState , useEffect , useContext} from 'react'
import Fire from '../firebase'
import Login from './test1'

export default function Test2() {

    const [idk , useidk] = useState(true)
    const [Email,setEmail]=useState('')
    const [Usern,setUsern]=useState('')
    const [Pw , setPw]=useState('')
    const [EmailErr, setEmailErr]=useState('')
    const [pwError, setpwError]=useState('')
    const [hasAccount, setHasaccount]=useState(false)

    const Clearinput =()=>{
        setEmail('')
        setPw('')
    }
    const ClearErr =()=>{
        setEmailErr('')
        setpwError('')
    }

    const handlelogin =(Email,Pw)=>{
        ClearErr()
        Fire
        .auth()
        .signInWithEmailAndPassword(Email,Pw)
        .catch(err =>{
            switch(err.code){
                case"auth/invalid-user":
                case"auth/invalid-pw":
                case"auth/invalid-email":
                setEmailErr(err.message)

                break
                case"auth/wrong-pw":
                setpwError(err.message)

            }
        })
    }


    const handlesign=(Email,Pw)=>{
        ClearErr()
        Fire
        .auth()
        .createUserWithEmailAndPassword(Email,Pw)
        .catch(err =>{
            switch(err.code){
                case"auth/email-already-in-use":
                
                case"auth/invalid-email":
                setEmailErr(err.message)

                break
                case"auth/weak-password":
                setpwError(err.message)
                
            }
        })
    }
    const signOut =()=>{
        Fire.auth().signOut()
    }

    const signlistener =()=>{
        Fire.auth().onAuthStateChanged(user =>{
            if (user ){
                Clearinput()
                setUsern(user)
            }else{
                setUsern('')
            }
        })
    }
    useEffect(()=>{
        signlistener()

    },[])


    return (
        <div>
            <Login  
            Email={Email}
            setEmail={setEmail}
            Usern={Usern}
            setUsern={setUsern}
            Pw={Pw}
            setPw={setPw}
            setEmailErr={setEmailErr}
            EmailErr={EmailErr}
            
            pwError ={pwError}
            setpwError={setpwError}
            setHasaccount={setHasaccount}
            handlesign={handlesign}
            handlelogin={handlelogin}
            signOut={signOut}
            signlistener={signlistener}
            hasAccount={hasAccount}
            />
        </div>
    )
}