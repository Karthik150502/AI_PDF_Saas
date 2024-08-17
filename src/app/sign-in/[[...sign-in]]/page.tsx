import React from 'react'
import { SignIn } from '@clerk/nextjs'
export default function page() {
    return (
        <div className='w-screen min-h-screen flex flex-col items-center justify-center'>
            <SignIn />
        </div>
    )
}
