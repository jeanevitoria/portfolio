import React from "react";
import perfil from '../assets/perfil.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from '@mui/material';
import { forwardRef } from 'react';

const Home = forwardRef((props, ref) => {

    return (
        <section ref={ref} className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#101016] relative">
            <div className="flex flex-col pt-8 md:mt-0 bg-[#101016] w-full md:w-2/3 h-[50vh] md:h-[100vh] justify-center items-center md:items-center">
                <div className="flex flex-row md:justify-end gap-2 md:gap-0 items-center">
                    <h2 className="text-[#F6F7EB] font-courier whitespace-nowrap md:p-4 text-2xl md:text-4xl font-light mr-2 md:mr-0">Olá, eu sou</h2>
                    <h2 className="text-[#101016] p-2 bg-[#f5f2f9] font-courier whitespace-nowrap md:p-4 text-2xl md:text-5xl animate-typing overflow-hidden font-extrabold">VITÓRIA!</h2>
                </div>
                <h2 className="text-[#F6F7EB] text-md md:text-lg font-courier mt-2">Desenvolvedora Full Stack</h2>
                <span className="text-8xl text-[#262633] mt-12">{'</>'}</span>
            </div>

            <div className="flex flex-col gap-6 pt-10 w-full md:w-2/3 bg-[#f5f2f9] h-[50vh] md:h-[100vh] items-center md:justify-center">
                <img
                    src={perfil}
                    className="z-20 w-1/2 sm:max-w-[160px] md:max-w-none md:w-3/5 lg:w-2/5 object-cover rounded-full border-2 border-[#101016] bg-[#101016] shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]"
                />

                <div className="flex gap-4 z-40">
                    <a
                        href="https://www.linkedin.com/in/jeane-vitória-félix-da-silva-396677140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-white text-white bg-[#101016] px-4 py-2 rounded hover:bg-white hover:text-[#101016] transition"
                    >
                        <FaLinkedin size={18} />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/jeanevitoria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-white text-white bg-[#101016] px-4 py-2 rounded hover:bg-white hover:text-[#101016] transition"
                    >
                        <FaGithub size={18} />
                        Github
                    </a>
                </div>
            </div>
        </section>
    )
})
export default Home;