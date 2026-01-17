import React, { forwardRef } from "react"
import perfil from '../assets/perfil.jpg'
import { Typography } from "@mui/material";

const AboutMe = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="min-h-screen p-8 gap-2 flex flex-col flex border-t-2 items-center justify-center bg-[#f5f2f9]">

            <div className="flex flex-col md:flex-row items-center justify-start mx-4 md:mx-8 md:mx-0 md:w-2/3 gap-12">
                <div className="flex flex-col items-center">
                    <img
                        src={perfil}
                        className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] my-6 object-cover rounded-full border-2 border-[#101016] bg-[#101016] shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]"
                    />
                    <div className="flex flex-col md:mt-8 md:mb-12">
                        <Typography sx={{ fontFamily: 'courier', textAlign: 'justify', fontWeight: 'bold' }} >
                            Meu nome é Jeane Vitória e sou estudante de Ciência da Computação na Universidade Federal Rural de Pernambuco (UFRPE).
                        </Typography>
                        <Typography sx={{ fontFamily: 'courier', fontWeight: 'bold', textAlign: 'justify', mt: 2 }} >
                            Minha experiência em projetos acadêmicos e pessoais me deu proficiência em criar interfaces de usuário intuitivas com ferramentas como React e Tailwind CSS.
                        </Typography>
                        <Typography sx={{ fontFamily: 'courier', fontWeight: 'bold', textAlign: 'justify', mt: 2 }} >
                            Atualmente, estou expandindo minhas habilidades em back-end, focando em frameworks como NestJS e Spring Boot para construir soluções mais eficientes e escaláveis. Meu objetivo é continuar evoluindo e me preparar para desafios reais do mercado.
                        </Typography>
                    </div>
                </div>
            </div>
        </section>)
})
export default AboutMe;