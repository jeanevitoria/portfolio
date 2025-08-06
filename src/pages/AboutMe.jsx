import React, { forwardRef } from "react"
import perfil from '../assets/perfil.png'
import { Typography } from "@mui/material";

const AboutMe = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="h-screen pt-8 md:pt-0 gap-2 flex flex-col flex border-t-2 items-center justify-center bg-[#f5f2f9]">
            <div className="flex flex-col items-center justify-start md:justify-end w-2/3 h-[20vh] md:h-[15vh]">
                <Typography
                    sx={{
                        fontSize: '25px',
                        color: 'white',
                        fontFamily: 'monospace',
                        backgroundColor: '#101016',
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    SOBRE MIM
                </Typography>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-start mx-8 md:mx-0 md:w-2/3 gap-12 h-[80vh]">
                <div className="flex flex-col">
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
        </section>)
})
export default AboutMe;