import React, { forwardRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import toast, { Toaster } from 'react-hot-toast';

const Home = forwardRef((props, ref) => {
    const notify = () => toast('E-mail copiado');

    return (
        <div className="min-h-screen w-full bg-[#101016] relative overflow-hidden flex flex-col items-center justify-center">
            <Toaster />
            {/* Background */}
            <DottedGlowBackground
                className="absolute inset-0 z-0 pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-80 dark:opacity-100"
                opacity={1}
                gap={10}
                radius={1.6}
                colorLightVar="--color-neutral-500"
                glowColorLightVar="--color-neutral-600"
                colorDarkVar="--color-neutral-500"
                glowColorDarkVar="--color-sky-800"
                backgroundOpacity={0}
                speedMin={0.3}
                speedMax={0.75}
                speedScale={1}
            />

            <section ref={ref} className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center w-full">
                <div className="flex flex-col pt-8 md:mt-0 w-full md:w-2/3 h-[50vh] md:h-[100vh] justify-center items-center md:items-center">
                    <div className="flex flex-row md:justify-end gap-2 md:gap-0 items-center">
                        <h2 className="text-[#F6F7EB] font-courier whitespace-nowrap md:p-4 text-2xl md:text-4xl font-light mr-2 md:mr-0">Olá, eu sou</h2>
                        <h2 className="text-[#101016] p-2 bg-[#f5f2f9] font-courier whitespace-nowrap md:p-4 text-2xl md:text-5xl animate-typing overflow-hidden font-extrabold rounded">VITÓRIA!</h2>
                    </div>
                    <h2 className="text-[#F6F7EB] text-md md:text-lg font-courier mt-2">Desenvolvedora Full Stack</h2>
                    <span className="text-8xl text-[#ffffff] mt-12">{'</>'}</span>

                    <div className="flex flex-col gap-6 w-full md:w-2/3 mt-20 items-center md:justify-center">
                        <div className="flex gap-4 z-40">
                            <a
                                href="https://www.linkedin.com/in/jeane-vitória-félix-da-silva-396677140"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-white text-white bg-transparent px-4 py-2 rounded hover:bg-white hover:text-[#101016] transition"
                            >
                                <FaLinkedin size={18} />

                            </a>
                            <a
                                href="https://github.com/jeanevitoria"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-white text-white bg-transparent px-4 py-2 rounded hover:bg-white hover:text-[#101016] transition"
                            >
                                <FaGithub size={18} />

                            </a>
                            <a
                                href="mailto:jeanevitoria994@gmail.com"
                                onClick={(e) => {
                                    navigator.clipboard.writeText("jeanevitoria994@gmail.com")
                                    notify()
                                }}
                                className="flex items-center gap-2 border border-white text-white bg-transparent px-4 py-2 rounded hover:bg-white hover:text-[#101016] transition"
                                title="jeanevitoria994@gmail.com"
                            >
                                <FaEnvelope size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
})

export default Home;