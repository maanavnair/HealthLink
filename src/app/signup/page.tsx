"use client"
import Image from 'next/image'
import AuthImage from '@/images/AuthImage.png'
import Link from 'next/link'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Checkbox } from '@/components/ui/checkbox'

const Signup = () => {

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [type, setType] = useState<string>("password");


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === "") {
            toast.error("Username cannot be empty")
        }
        else if (email === "") {
            toast.error("Email cannot be empty");
        }
        else if (password === "") {
            toast.error("Password cannot be empty");
        }
        else if (password.length < 6) {
            toast.error("Password cannot be less than 6 characters");
        }
    }

    return (
        <div className='w-screen min-h-screen bg-gray-200 flex justify-center items-center'>
            <form
                className='bg-white w-[30vw] py-10 px-5 drop-shadow-xl rounded-xl'
                onSubmit={handleSubmit}
            >
                <div className='flex justify-center'>
                    <Image src={AuthImage} alt='Auth' className='h-[20vh] w-[20vh]' />
                </div>
                <div className='flex flex-col items-center gap-5 my-5'>
                    <span className='w-full'>
                        <input
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='px-2 py-2 w-full border-2 border-gray-400 rounded-md'
                        />
                    </span>
                    <span className='w-full'>
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='px-2 py-2 h-10 w-full border-2 border-gray-400 rounded-md'
                        />
                    </span>
                    <span className='w-full flex flex-col'>
                        <input
                            type={type}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='px-2 py-2 h-10 w-full border-2 border-gray-400 rounded-md'
                        />
                        <span className='mt-2 flex justify-center items-center'>
                            <Checkbox
                                id='show'
                                onCheckedChange={
                                    (e) => {
                                        if (type === "text") {
                                            setType("password")
                                        }
                                        else {
                                            setType("text");
                                        }
                                    }
                                }
                            />
                            <label
                                htmlFor='show'
                            >
                                Show Password?
                            </label>
                        </span>
                    </span>
                </div>
                <div className='m-5 flex justify-center'>
                    <Link
                        href="/login"
                        className='text-gray-600 underline'
                    >
                        Already have an account?
                    </Link>
                </div>
                <div>
                    <button
                        type='submit'
                        className='w-full bg-gray-900 text-white py-3 rounded-md'
                    >
                        SIGNUP
                    </button>
                </div>
            </form>
            <Toaster />
        </div>
    )
}

export default Signup;