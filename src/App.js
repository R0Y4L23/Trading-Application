import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'

const App = () => {

  const navigate=useNavigate()

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-[400px] h-[400px] rounded bg-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-col justify-center items-center gap-10'>
        <div>
          <p className='text-2xl font-bold text-gray-800 mb-3'>Email</p>
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-[300px] h-[40px] rounded shadow-lg p-2' placeholder='Enter here...'/>
        </div>
        <div>
          <p className='text-2xl font-bold text-gray-800 mb-3'>Password</p>
          <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='w-[300px] h-[40px] rounded shadow-lg p-2' placeholder='Enter here...'/>
        </div>
        <button onClick={()=>{
          if(email&&password)
          {
            navigate("/main")
          }
        }} type="button" class="text-white w-[200px] bg-gray-400 shadow-md mt-10 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Login</button>
      </div>
    </div>
  )
}

export default App