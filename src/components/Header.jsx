import React from "react";
import { Button } from '@mui/material'

const Header = ({ habilitysRef, contactRef, aboutMeRef, projectsRef }) => {

    const scrollToHabilitys = () => {
        habilitysRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            <Button onClick={scrollToAboutMe} sx={{ color: 'black', fontFamily: 'monospace' }}>Sobre mim</Button>
            <Button onClick={scrollToHabilitys} sx={{ color: 'black', fontFamily: 'monospace' }}>Habilidades</Button>
            <Button onClick={scrollToProjects} sx={{ color: 'black', fontFamily: 'monospace' }}>Projetos</Button>
            <Button onClick={scrollToContact} sx={{ color: 'black', fontFamily: 'monospace' }}>Contato</Button>
        </header>
    )
}
export default Header;