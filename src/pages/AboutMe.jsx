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
                    <Typography sx={{ fontFamily: 'courier', textAlign: 'justify', fontWeight: 'bold' }}>Meu nome é Jeane Vitória, sou estudante de Bacharelado em Ciência da Computação pela Universidade Federal Rural de Pernambuco (UFRPE). </Typography>
                    <Typography sx={{ fontFamily: 'courier', fontWeight: 'bold', textAlign: 'justify', mt: 2 }}>
                        Tenho me dedicado ao desenvolvimento de aplicações web, por meio de projetos acadêmicos e pessoais. Estou em busca de uma oportunidade de estágio que me permita aplicar na prática os conhecimentos adquiridos em projetos reais.
                    </Typography>
                </div>
            </div>
        </section>)
})
export default AboutMe;