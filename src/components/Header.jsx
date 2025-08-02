import React from "react";
import { Button, Typography } from '@mui/material'

const Header = ({ homeRef, contactRef, aboutMeRef, projectsRef }) => {

    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAboutMe = () => {
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className='top-0 left-0 flex shadow-sm fixed bg-[#f5f2f9] z-50 w-full items-center justify-center'>
            <Button onClick={scrollToHome} sx={{ color: 'black', fontFamily: 'elite' }}>Início</Button>
            <Button onClick={scrollToAboutMe} sx={{ color: 'black', fontFamily: 'elite' }}>Sobre mim</Button>
            <Button onClick={scrollToProjects} sx={{ color: 'black', fontFamily: 'elite' }}>Projetos</Button>
            <Button onClick={scrollToContact} sx={{ color: 'black', fontFamily: 'elite' }}>Contato</Button>
        </header>
    )
}
export default Header;