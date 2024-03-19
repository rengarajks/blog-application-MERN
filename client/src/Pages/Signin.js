import React from 'react'
import NavBar from '../Components/NavBar'
import {Link} from 'react-router-dom'

function Signin() {
  return (
<>

<NavBar/>
    <div
  className="bg-cover bg-center h-[100vh] flex justify-center items-center "
  style={{ backgroundImage: 'url(login.jpg)' }}
>

  
  
  <div className='text-white bg-gray-500/50 rounded-md w-1/4 p-4 py-12'>

  <h3 className='text-center text-3xl font-medium '>SIGN IN</h3>
  <div className='flex justify-center'>
  

<div className='w-2/3'>


 <div className='m-2'><span className='font-medium'>Username</span></div>
 <div><input type='text' className='rounded-md w-full  p-1 text-black' ></input></div>



 <div className='m-2'><span className='font-medium'>Email</span></div>
 <div><input type='text' className='rounded-md w-full  p-1 text-black' ></input></div>



 <div className='m-2'><span className='font-medium'>Password</span></div>
 <div><input type='text' className='rounded-md w-full  p-1 text-black' ></input></div>

 <button className='bg-green-800 w-full mt-4 p-1 py-2 rounded-md'>Signin</button>
  
 <div className='text-center mt-4'><span className='text-center'>Already have an account? </span>

<Link to={'/login'}><span className='text-green-600 '>Login here</span></Link></div>



</div>
  </div>


  </div>
</div>

</>

  )
}

export default Signin