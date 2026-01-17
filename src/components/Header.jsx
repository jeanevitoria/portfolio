import React from "react";
import { Button } from '@mui/material'

// 1. Receba a prop 'activeSection' aqui
const Header = ({ activeSection, habilitysRef, homeRef, aboutMeRef, projectsRef }) => {

    const scrollToHabilitys = () => {
        habilitysRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAboutMe = () => {
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Helper para definir o estilo ativo (Amarelo vs Branco)
    const getButtonStyle = (sectionName) => ({
        color: activeSection === sectionName ? '#fde047' : 'white', // Amarelo se ativo, Branco se não
        fontFamily: 'monospace',
        transition: 'color 0.3s ease',
        fontSize: activeSection === sectionName ? '18px' : '14px',
        fontWeight: activeSection === sectionName ? 'bold' : 'normal'
    });

    return (
        <header className='top-0 left-0 flex shadow-sm fixed bg-[#000000] z-50 w-full items-center justify-center'>
            {/* Botão HOME */}
            <Button
                onClick={scrollToHome}
                sx={getButtonStyle('Home')}
            >
                INÍCIO
            </Button>

            {/* Botão SOBRE MIM */}
            <Button
                onClick={scrollToAboutMe}
                sx={getButtonStyle('AboutMe')}
            >
                Sobre
            </Button>

            {/* Botão HABILIDADES */}
            <Button
                onClick={scrollToHabilitys}
                sx={getButtonStyle('Habilitys')}
            >
                Habilidades
            </Button>

            {/* Botão PROJETOS */}
            <Button
                onClick={scrollToProjects}
                sx={getButtonStyle('Projects')}
            >
                Projetos
            </Button>

        </header>
    )
}
export default Header;