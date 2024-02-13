import React from 'react'
import { motion } from "framer-motion";

import Service from '../Components/Service'
import { fadeIn } from '../Components/variants';

import Banner from "../assets/Banner.png"


const Home = () => {
    return (
        <>
            <div className={` md:h-[100%] xl:h-[100vh] md:bg-banner bg-no-repeat bg-complete py-24 md:py-36`}>
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    animate="show"
                    exit="hidden" className='h-[100%] flex flex-col md:flex-row justify-between gap-8 w-[90%] md:w-[85%] lg:w-[80%] items-center m-auto'>
                    <div className='basis-[55%]'>
                        <h1 className='text-3xl md:text-3xl lg:text-5xl xl:text-8xl text-white font-extrabold md:leading-[3rem] lg:leading-[4rem] xl:leading-[6rem] mb-4 lg:mb-8'>Von der Idee  zur <br />  Realität!</h1>
                        <p className='text-base md:text-lg lg:text-xl text-white xl:max-w-[70%] mb-4 md:mb-6 lg:mb-8 xl:mb-6 md:leading-6 lg:leading-8'>Wir gestalten das Gesicht deiner Online-Welt. Gemeinsam schaffen wir digitale Magie. Dein digitaler Durchbruch beginnt hier und jetzt! </p>
                        <button className='px-4 lg:px-6 py-3 bg-white text-purple-900 rounded-full text-base  md:text-lg lg:text-2xl font-bold hover:bg-transparent border-2 border-white hover:text-white duration-300 ease-in-out'>VERWIRKLICHE DEINE IDEE</button>
                    </div>
                    <div className='basis-[40%] w-[100%]'>
                        <img src={Banner} alt="" className='w-[100%]' />
                    </div>
                </motion.div>
            </div>

            {/* <Service/> */}
        </>
    )
}

export default Home