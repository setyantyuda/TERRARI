import React, { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const onSubmit = () => {
        if (email === "" || password === "") {
            setError(true)
        } else {
            window.location.href = "/"
        }
    }
  return (
    <div className='flex w-full h-screen'>
        <div className='md:w-[50%] font-semibold px-24 my-auto'>
            <div className='text-4xl'>WELCOME TO TERRARI</div>
            <div className='my-4'>
                <div className='mb-1'>Email :</div>
                <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='px-2 w-full py-3 border-2 border-black border-solid rounded-md'/>
            </div>
            <div className='my-4'>
                <div className='mb-1'>Password :</div>
                <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='px-2 w-full py-3 border-2 border-black border-solid rounded-md'/>
            </div>
            {error ? (
                <div className='text-red-500 text-center'>Invalid Email / Password</div>
            ) : null}
            <div onClick={onSubmit} className='mt-5 bg-yellow-100 w-full py-3 cursor-pointer border-2 border-black border-solid rounded-md text-center text-xl font-bold'>Login</div>
        </div>
        <div className='w-[50%] h-full'>
            <img src='/bg.jpg' alt='' className='w-full object-cover h-full'/>
        </div>
    </div>
  )
}

export default SignIn