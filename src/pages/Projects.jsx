import React, { forwardRef } from "react"
import { Card, Typography, CardHeader, CardContent, CardActionArea } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import promonitor from '../assets/promonitor.png';
import meetspace from '../assets/meetspace.svg';
import cursos from '../assets/cursos.png'
import cultbox from '../assets/cultbox.png'
import adotepet from '../assets/adotepet.png'

const Projects = forwardRef((props, ref) => {
    const projects = [
        { title: 'MeetSpace', media: meetspace, description: 'Sistema distribuído utilizando a arquitetura de microsserviços que gerencia reservas de salas de reunião.', technologys: ['Node.js', 'NestJS', 'Docker', 'Python', 'TypeScript', 'JavaScript'], github: 'https://github.com/MeetSpaceUFRPE', site: '' },
        { title: 'Cursos', media: cursos, description: 'Aplicação SaaS que permite a profissionais, educadores e empresas disponibilizarem seus próprios conteúdos educacionais de forma organizada.', technologys: ['Nest.JS', 'JavaScript', 'Docker', 'PostGRE'], github: 'https://github.com/Plataforma-de-Cursos-Web', site: '' },
        { title: 'ProMonitor', media: promonitor, description: 'Sistema Web para gestão das monitorias do Departamento de Computação da UFRPE.', technologys: ['Javascript', 'Node.JS', 'Docker', 'MySQL'], github: 'https://github.com/HidraCode', site: '' },
        { title: 'CultBox', media: cultbox, description: 'Rede social voltada para eventos culturais, na qual os usuários e empresas podem anunciar a realização de eventos, bem como compartilhar suas experiências.', technologys: ['TypeScript', 'PostGRE', 'Python','Django'], github: 'https://github.com/Cult-Box', site: '' },
        { title: 'AdotePet', media: adotepet, description: 'Sistema web de adoção de animais. Permite o cadastro de animais para adoção e promove a comunicação entre partes interessadas por meio de chat.', technologys: ['Javascript', 'MongoDB','Node.JS', 'Express'], github: 'https://github.com/Cult-Box', site: '' },
    ]

    return (
        <section ref={ref} className="min-h-screen pt-8 py-8 md:gap-16 md:pt-0 flex flex-col flex items-center justify-start bg-[#f5f2f9]">
            <div className="flex flex-col items-center justify-start md:justify-end w-2/3 h-[20vh]">
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
                    PROJETOS
                </Typography>
            </div>

            <div className=" w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-8 gap-4 items-start justify-start">
                {projects.map((project) => { return <ProjectCard {...project} /> })}
            </div>
        </section>
    )
})
export default Projects;