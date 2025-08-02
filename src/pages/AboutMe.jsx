import React, { forwardRef } from "react"

const AboutMe = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="min-h-screen bg-green-100 flex items-center justify-center">
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
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/jeanevitoria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-white text-white bg-[#101016] px-4 py-2 rounded hover:bg-white hover:text-[#101016] transition"
                    >
                        Github
                    </a>
                </div>
            </div>
        </section>)
})
export default AboutMe;