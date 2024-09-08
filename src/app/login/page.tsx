"use client"
import Link from 'next/link'
import Image from 'next/image'
import AuthImage from '@/images/AuthImage.png'

const Login = () => {
    return (
        <div className='w-screen min-h-screen bg-gray-200 flex justify-center items-center'>
            <div className='bg-white w-[30vw] py-10 px-5 drop-shadow-xl'>
                <div className='flex justify-center'>
                    <Image src={AuthImage} alt='Auth' className='h-[20vh] w-[20vh]' />
                </div>
                <div className='flex flex-col items-center gap-5 my-5'>
                    <span className='w-full'>
                        <input
                            type='email'
                            placeholder='Email'
                            className='px-2 py-2 h-10 w-full border-2 border-gray-400 rounded-md'
                        />
                    </span>
                    <span className='w-full'>
                        <input
                            type='password'
                            placeholder='Password'
                            className='px-2 py-2 h-10 w-full border-2 border-gray-400 rounded-md'
                        />
                    </span>
                </div>
                <div className='m-5 flex justify-center'>
                    <Link
                        href="/signup"
                        className='text-gray-600 underline'
                    >
                        Don't have an account?Create one now!
                    </Link>
                </div>
                <div>
                    <button
                        className='w-full bg-gray-900 text-white py-3 rounded-md'
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;