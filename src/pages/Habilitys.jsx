import React, { forwardRef } from "react";
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaJs,
    FaJava,
    FaReact,
    FaCss3Alt,
    FaNodeJs,
    FaGitAlt,
    FaGithubAlt,
    FaPython,
    FaDocker,
    FaDatabase
} from "react-icons/fa";
import {
    SiTypescript,
    SiTailwindcss,
    SiSpringboot,
    SiExpress,
    SiDjango,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiNestjs
} from "react-icons/si";
import { Card, Typography } from "@mui/material";

const Habilitys = forwardRef((props, ref) => {
    const habilitys = [
        { title: "JavaScript", icon: <FaJs /> },
        { title: "TypeScript", icon: <SiTypescript /> },
        { title: "Java", icon: <FaJava /> },
        { title: "React", icon: <FaReact /> },
        { title: "CSS", icon: <FaCss3Alt /> },
        { title: "Tailwind", icon: <SiTailwindcss /> },
        { title: "SpringBoot", icon: <SiSpringboot /> },
        { title: "Node.JS", icon: <FaNodeJs /> },
        { title: "NestJS", icon: <SiNestjs /> },
        { title: "Express", icon: <SiExpress /> },
        { title: "Git", icon: <FaGitAlt /> },
        { title: "GitHub", icon: <FaGithub /> },
        { title: "Python", icon: <FaPython /> },
        { title: "Django", icon: <SiDjango /> },
        { title: "Docker", icon: <FaDocker /> },
        { title: "MySQL", icon: <SiMysql /> },
        { title: "PostGRE", icon: <SiPostgresql /> },
        { title: "MongoDB", icon: <SiMongodb /> }
    ];

    return (
        <section ref={ref} className="min-h-screen flex-1 pt-8 md:pt-0 md:gap-12 flex flex-col flex items-center justify-center bg-[#101016]">
            <div className="flex flex-col items-center justify-start md:justify-end w-2/3 h-[20vh]">
                <Typography
                    sx={{
                        fontSize: '25px',
                        color: '#101016',
                        fontFamily: 'monospace',
                        backgroundColor: '#f5f2f9',
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    HABILIDADES
                </Typography>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center px-4 pb-16">
                {habilitys.map((hability, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#262633] p-4 rounded w-24 text-[#FDCFF3] hover:scale-110 transition-transform duration-200"
                    >
                        <div className="text-4xl mb-2">{hability.icon}</div>
                        <span className="text-sm font-mono text-center">{hability.title}</span>
                    </div>
                ))}
            </div>

        </section>
    )
})
export default Habilitys;