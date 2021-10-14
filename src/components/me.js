import React,{Component, useState ,  useRef} from 'react';
import me from './me.css'
import DATA from '../DATA.json'
import {Card , Button , Form , Container} from 'react-bootstrap'
import Fire from '../firebase'

function Signup (props){
    const { Email , setEmail , Usern ,setUsern , Pw , setPw , EmailErr , setEmailErr , pwError , hasAccount,  setpwError , setHasaccount , handlesign , handlelogin ,signout , signListener } =  props;

const emailRef = useRef()
const passwordRef = useRef()


return(
    <>
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
    <Card>
        <Card.Header className='mt-3 text-center w-200 h=100'>Halluiah</Card.Header>
        <Card.Body className='mb-4 text-center'>
        <Form>
            <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control  type='email' ref={emailRef} required />

              
                
            </Form.Group>
            <Form.Group id='password'>
                <Form.Label>password</Form.Label>
                <Form.Control  type='password' ref={passwordRef} required />

              
                
            </Form.Group>
           <Button className='w-100'>sign up </Button>
            
        </Form>

            
        </Card.Body>

    </Card>
    </Container>
    
    <div className='w-100 text-center mt-2'>Already got an accout losah?
    </div>
    
    
    
    </>
)




}

export default Signup;