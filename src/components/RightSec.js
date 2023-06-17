import React, { useState } from 'react'
import './RightSec.css'
import { useNavigate } from 'react-router'
export default function RightSec() {

 const initialValue={name:'',username:'',email:'',mobile:'',perm:'false'}
 const initialErrorValue={name:'',username:'',email:'',mobile:''}
  const [formValue,setFormValue]=useState(initialValue)
  const [errorMsg,setErrorMsg]=useState(initialErrorValue)
  const next_categoryPage=useNavigate();

  const changeHandler=(e)=>{
    setFormValue({...formValue,[e.target.name]:e.target.value})
    console.log(e.target.name+" : "+e.target.value)
    formValidation()
  }

  const checkboxHandler=(e)=>{
    if(e.target.value=='true'){
      setFormValue({...formValue,[e.target.name]:'false'})
    }
    else{
      setFormValue({...formValue,[e.target.name]:'true'})
    }
    
    formValidation()
  }

const formValidation=()=>{
  const errorM={}
  if(!formValue.name)
  {
    errorM.name='Field is required'
  }
  if(!formValue.username)
  {
    errorM.username='Field is required'
  }
  if(!formValue.email)
  {
    errorM.email='Field is required'

  }
  if(!formValue.mobile)
  {
    errorM.mobile='Field is required'
  }
  console.log(formValue.perm+" "+(typeof formValue.perm))
  if(formValue.perm=='false')
  {
    errorM.perm='Check this box if you want to proceed'
  }
  
  setErrorMsg(errorM)
}

const submitHandler=()=>{
  formValidation()
  if(Object.keys(errorMsg).length==0)
  {
    console.log("Submit Successfully",)
    localStorage.setItem('userDetail' , JSON.stringify(formValue))
    next_categoryPage("/category")
  }
  else{
    console.log("NoT Submit Successfully")
  }
}

  return (
    <div className='rightSec'>
      <div className='supperapp-signUp-form'>
        <div className='supper-app-title'>Super app</div>
        <div className='create-acount-label'>Create your new account</div>
        <div className='signup-form-box'>
          <form onSubmit={formValidation}>
            <input type='text' name='name' value={formValue.name} placeholder='Name' onChange={changeHandler} />
            <div className='validation-msg'>{errorMsg.name}</div>

            <input type='text' name='username' placeholder='UserName' value={formValue.username} onChange={changeHandler}/>
            <div className='validation-msg'>{errorMsg.username}</div>

            <input type='text' name='email' placeholder='Email' value={formValue.email} onChange={changeHandler} />
            <div className='validation-msg'>{errorMsg.email}</div>

            <input type='number' name='mobile' placeholder='Mobile' value={formValue.mobile} onChange={changeHandler}/>
            <div className='validation-msg'>{errorMsg.mobile}</div>

            <div className='share-permision'><input type='checkbox' name='perm' value={formValue.perm} onChange={checkboxHandler}  id='data-sharing-permision' /><span style={{fontSize:'16px'}} for="data-sharing-permision">Share my registration data with Superapp</span></div>
            <div className='validation-msg'>{errorMsg.perm}</div>

            <input type='button'  onClick={()=>{
              formValidation()
              submitHandler()}} value='SIGN UP'/>
            
            <div className='detail-termsConditions'>
              <p>By clicking on Sign up. you agree to Superapp <span style={{color:'#72DB73', fontWeight:'bold'}}>Terms and Conditions of Use</span></p>
            </div>

            <div className='detail-privacy'>
              <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color:'#72DB73', fontWeight:'bold'}}>Privacy Policy</span></p>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}
