'use client'
import React from 'react'
import sc1 from './../../../assets/landing_animation/Screenshot 2024-09-21 224137.png';
import sc2 from './../../../assets/landing_animation/Screenshot 2024-09-21 224339.png';
import sc3 from './../../../assets/landing_animation/Screenshot 2024-09-21 224404.png';
import sc4 from './../../../assets/landing_animation/Screenshot 2024-09-21 224413.png';
import sc5 from './../../../assets/landing_animation/Screenshot 2024-09-21 224420.png';
import Image from 'next/image';
import { motion } from 'framer-motion'
import "./styles.css"
export default function LandingAnimation() {
    return (
        <div className="h-full w-full overflow-auto relative">
            <Image src={sc1} alt="Document 1" height={650} width={400} className='transition-transform absolute rotate-45 shadow-2xl translate-x-12 translate-y-12' />
            <Image src={sc2} alt="Document 2" height={650} width={400} className='transition-transform absolute rotate-90 shadow-2xl translate-x-6 translate-y-6' />
            <Image src={sc3} alt="Document 3" height={650} width={400} className='transition-transform absolute -rotate-90 shadow-2xl translate-x-20 translate-y-20' />
            <Image src={sc4} alt="Document 4" height={650} width={400} className='transition-transform absolute -rotate-45 shadow-2xl translate-x-10 translate-y-10' />
            <Image src={sc5} alt="Document 5" height={650} width={400} className='transition-transform absolute rotate-180 shadow-2xl translate-x-8 translate-y-8' />
        </div>
    )
}
