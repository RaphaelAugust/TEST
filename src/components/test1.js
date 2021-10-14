import React, {useState , useEffect} from 'react'
import Test2 from './test2'
import './me.css'
import { Button } from 'bootstrap';


function Login (props){
const { Email , setEmail , Usern ,setUsern , Pw , setPw , EmailErr , setEmailErr , pwError , hasAccount,  setpwError , setHasaccount , handlesign , handlelogin ,signout , signListener } =  props;


    return (
        
        
        <section className='login'>
            <div className={'loginContainer'}>
                <form
                >
                    <label >UserName</label>
                    <input required type='text'  autoFocus value={Email} onChange={
                        e=>setEmail(e.target.value) 
                    }/>
                    <p className='errorMsg'>{EmailErr}</p>
                    <label>Password</label>
                    <input
                    required 
                  
                    type='password'
                    value={Pw}
                    onChange={e=>setPw(e.target.value)
 
                    }
                   
                    
                    />
                    <p className='errorMsg'>{pwError}</p>
                    <div className='btnContainer'>
                       {hasAccount ? (
                           <>
                           <button onChange={handlelogin}>Sign in</button>
                           <p>Dont have an account ? <span onClick={()=>{
                               setHasaccount(!hasAccount)
                           }}>Sign up</span></p>
                           
                           
                           
                           </>
                       )
                       :
                         (<>
                            <button onChange={handlesign}>Sign up</button>
                            <p>Already have an account ? <span onClick={()=>{setHasaccount(!hasAccount)}}>Sign in</span></p>

                           </>
                        )}
                    </div>
                    
                </form>
            </div>

        </section>
    )
}
export default Login