import React from 'react'
import './Signup.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate=useNavigate()

  const signUp=()=>{
    const email=document.getElementById('email-signup').value
    const password=document.getElementById('password-signup').value
    createUserWithEmailAndPassword(auth,email,password).then((cred)=>{
      console.log("signed up")
      console.log(cred.user)
      navigate('/')
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
      <div className="py-6">


<div className=" signUp flex  justify-center    mt-12 overflow-hidden mx-auto max-w-sm lg:max-w-2xl rounded-2xl">
<div className="w-full p-8 lg:w-1/2 ">

<div class="mt-4">
<label class="block text-gray-700 text-sm font-bold mb-2">Email </label>
<input class=" text-gray-700 focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block w-full appearance-none" type="email" id='email-signup' placeholder='john@example.com'/>
</div>
<div class="mt-4">
<div class="flex justify-between">
 <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>

</div>
<input class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none"   placeholder='Must be atleast 6 characters'   type="password" id='password-signup'/>
</div>
<div className="mt-8">
<button className='btn3  bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 ' onClick={signUp}>SignUp</button>
</div>


</div>
</div>

</div>


    </>
  )
}

export default Signup
