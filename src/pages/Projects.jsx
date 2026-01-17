import React, { forwardRef, useState } from "react"
import { FaGithub } from 'react-icons/fa';
import Typography from '@mui/material/Typography';
import { IoOpenOutline } from "react-icons/io5";
import promonitor from '../assets/promonitor.png';
import meetspace from '../assets/meetspace.svg';
import cursos from '../assets/cursos.png'
import cultbox from '../assets/cultbox.png'
import adotepet from '../assets/adotepet.png'
import movingsound from '../assets/movingsound.png'
import amargem from '../assets/amargem.png'
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { Button } from "@mui/material";

const Projects = forwardRef((props, ref) => {

    const projects = [
        {
            title: 'À Margem',
            media: amargem,
            description: 'Participei do desenvolvimento do site oficial do Coletivo À Margem, o primeiro grupo de teatro hip-hop de Pernambuco. O projeto teve como objetivo criar uma plataforma moderna, acessível e responsiva que refletisse a identidade visual e os valores sociais e culturais do grupo.',
            contribution: <>Atuei no desenvolvimento Full Stack, com foco na arquitetura do Front-end utilizando <b className="text-yellow-300">Next.JS</b>. No Back-end, colaborei na construção do banco de dados com <b className="text-yellow-300">Prisma</b> e <b className="text-yellow-300">PostgreSQL</b>.</>,
            github: 'https://github.com/ATMZSolutions/a-margem-front.git',
            site: 'https://www.amargem.com.br/'
        },
        {
            title: 'AdotePet',
            media: adotepet,
            description: 'Sistema web de adoção de animais. Permite o cadastro de animais para adoção e promove a comunicação entre partes interessadas por meio de chat. Obs: versão em deploy sem suporte a websocket.',
            contribution: <>Desenvolvi a API RESTful utilizando <b className="text-yellow-300">Node.JS</b> e <b className="text-yellow-300">Express</b>, integrada a um banco de dados não-relacional <b className="text-yellow-300">MongoDB</b> para flexibilidade no registro dos animais. O front-end foi construído com <b className="text-yellow-300">Javascript</b> e <b className="text-yellow-300">React</b>.</>,
            github: 'https://github.com/jeanevitoria/AdotePet-FrontEnd',
            site: 'https://adotepet-six.vercel.app'
        },
        {
            title: 'MovingSound',
            media: movingsound,
            description: 'Sistema web que transforma uma playlist do Spotify em uma playlist no Youtube. Engloba a manipulação da API do Spotify em conjunto com web scrapping para mapear as músicas no Youtube.',
            contribution: <>Implementei a lógica de automação e manipulação de dados musicais utilizando <b className="text-yellow-300">Django</b>. Para localizar as faixas no Youtube sem API oficial, desenvolvi scripts de <b className="text-yellow-300">Scrapping</b>, integrando tudo via <b className="text-yellow-300">Javascript</b> no client-side. Devido ao Scrapping, não foi possível fazer deploy.</>,
            github: 'https://github.com/jeanevitoria/moving-sound',
            site: ''
        },
        {
            title: 'MeetSpace',
            media: meetspace,
            description: 'Sistema distribuído utilizando a arquitetura de microsserviços que gerencia reservas de salas de reunião.',
            contribution: <>Atuei na arquitetura de microsserviços escaláveis utilizando <b className="text-yellow-300">NestJS</b> e <b className="text-yellow-300">Node.js</b> com tipagem estática via <b className="text-yellow-300">TypeScript</b>. A orquestração dos serviços e ambientes foi padronizada com <b className="text-yellow-300">Docker</b> e scripts auxiliares em <b className="text-yellow-300">Python</b>.</>,
            github: 'https://github.com/MeetSpaceUFRPE',
            site: ''
        },
        {
            title: 'Cursos',
            media: cursos,
            description: 'Aplicação SaaS que permite a profissionais, educadores e empresas disponibilizarem seus próprios conteúdos educacionais de forma organizada.',
            contribution: <>Construí uma plataforma robusta para gestão de conteúdo utilizando <b className="text-yellow-300">Nest.JS</b>. A infraestrutura foi containerizada com <b className="text-yellow-300">Docker</b> e a persistência de dados foi gerenciada via <b className="text-yellow-300">PostgreSQL</b> e <b className="text-yellow-300">JavaScript</b>.</>,
            github: 'https://github.com/Plataforma-de-Cursos-Web',
            site: ''
        },
        {
            title: 'ProMonitor',
            media: promonitor,
            description: 'Sistema Web para gestão das monitorias do Departamento de Computação da UFRPE.',
            contribution: <>Desenvolvi o sistema de gerenciamento acadêmico focando no back-end com <b className="text-yellow-300">Node.JS</b> e modelagem relacional em <b className="text-yellow-300">MySQL</b>. O ambiente de desenvolvimento foi otimizado com <b className="text-yellow-300">Docker</b> e o front-end utiliza <b className="text-yellow-300">Javascript</b> e <b className="text-yellow-300">React</b>.</>,
            github: 'https://github.com/HidraCode',
            site: ''
        },
        {
            title: 'CultBox',
            media: cultbox,
            description: 'Rede social voltada para eventos culturais, na qual os usuários e empresas podem anunciar a realização de eventos, bem como compartilhar suas experiências.',
            contribution: <>Desenvolvimento Full Stack de uma rede social, utilizando <b className="text-yellow-300">Django</b> e <b className="text-yellow-300">Python</b> no back-end em conjunto com <b className="text-yellow-300">TypeScript</b> no front-end. O banco de dados utilizado foi o <b className="text-yellow-300">PostGRE</b>.</>,
            github: 'https://github.com/Cult-Box',
            site: ''
        },
    ]

    const [selectedProject, setSelectedProject] = useState(projects[0])
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <section ref={ref} className="min-h-screen relative md:gap-16 pt-0 flex flex-col-reverse md:flex-row items-center justify-end bg-[#101016]">

            {/* CSS INJETADO PARA CONTROLAR A MÁSCARA RESPONSIVA */}
            <style>{`
                .project-mask {
                    /* Mobile: Gradiente de baixo (transparente) para cima (visível) */
                    mask-image: linear-gradient(to top, transparent 0%, black 100%);
                    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 100%);
                }
                
                @media (min-width: 1024px) {
                    .project-mask {
                        /* Desktop: Gradiente da esquerda (transparente) para direita (visível) */
                        mask-image: linear-gradient(to right, transparent 0%, black 100%);
                        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 100%);
                    }
                }
            `}</style>

            {/* --- ÁREA DE TEXTO (Embaixo no mobile, Esquerda no Desktop) --- */}
            <div className="relative w-full md:absolute md:top-0 md:left-0 md:h-screen text-white z-20 bg-[#101016] md:bg-transparent md:bg-gradient-to-r md:from-[#101016] md:via-[#00000099] md:to-transparent md:w-4/5 lg:w-1/2">
                <div className="flex flex-col gap-6 px-6 md:pl-12 md:w-2/3 h-full items-center justify-center text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold">{selectedProject.title}</h1>
                    <h4 className="text-sm md:text-base border-l-4 border-red-500 pl-4 text-justify md:text-left">
                        {selectedProject.description}
                    </h4>
                    <h4 className="text-sm md:text-base border-l-4 border-purple-500 pl-4 text-justify md:text-left">
                        {selectedProject.contribution}
                    </h4>
                    {/* Botões */}
                    <div className=" flex flex-row gap-6 w-full items-center justify-center md:pb-0">
                        <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex z-20 items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/5 text-neutral-100 hover:bg-white hover:text-[#0B0F1A] transition backdrop-blur-sm"
                        >
                            <FaGithub size={18} />
                            Github
                        </a>

                        {selectedProject.site && (
                            <a
                                href={selectedProject.site}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/5 text-neutral-100 hover:bg-white hover:text-[#0B0F1A] transition backdrop-blur-sm"
                            >
                                <IoOpenOutline size={18} />
                                Site
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* --- ÁREA DA IMAGEM (Topo no mobile, Direita no Desktop) --- */}
            <div className="relative w-full h-[50vh] md:h-screen md:w-full">
                <img
                    src={selectedProject.media}
                    className="object-cover w-full h-full md:h-screen project-mask"
                    alt="Project Preview"
                />
                {/* Botões */}

                <div className="absolute bottom-0 md:bottom-10 right-0 flex h-auto flex-row gap-4 w-full md:w-2/5 lg:w-full items-center px-6 md:pl-12 justify-between md:justify-center pb-4 md:pb-0">

                    {/* Botão ANTERIOR */}
                    <Button
                        size='small'
                        startIcon={<MdArrowBack size={18} />}
                        className="flex z-20 items-center gap-2 !px-4 !rounded-full !border !border-white/30 !bg-black/40 !text-neutral-100 hover:!bg-white hover:!text-[#0B0F1A] transition backdrop-blur-sm !normal-case"
                        onClick={() => {
                            const newIndex = currentIndex - 1;
                            if (newIndex >= 0) {
                                setSelectedProject(projects[newIndex]);
                                setCurrentIndex(newIndex)
                            }
                        }}
                        disabled={currentIndex === 0}
                        sx={{
                            minWidth: 0,
                            '&:hover': { backgroundColor: 'transparent' }
                        }}
                    >
                        ANTERIOR
                    </Button>

                    {/* Botão PRÓXIMO */}
                    {projects.indexOf(selectedProject) < projects.length - 1 && (
                        <Button
                            size='small'
                            endIcon={<MdArrowForward size={18} />}
                            className="flex items-center gap-2 !px-4 !rounded-full !border !border-white/20 !bg-black/40 !text-neutral-100 hover:!bg-white hover:!text-[#0B0F1A] transition backdrop-blur-sm !normal-case"
                            onClick={() => {
                                const newIndex = currentIndex + 1
                                if (newIndex < projects.length) {
                                    setSelectedProject(projects[newIndex]);
                                    setCurrentIndex(newIndex)
                                }
                            }}
                            sx={{
                                minWidth: 0,
                                '&:hover': { backgroundColor: 'transparent' }
                            }}
                        >
                            PRÓXIMO
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
})
export default Projects;