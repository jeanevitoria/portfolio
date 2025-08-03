import React, { forwardRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Typography } from "@mui/material";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="h-screen pt-8 md:pt-0 gap-2 flex flex-col items-center justify-center bg-[#101016]">
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
          CONTATO
        </Typography>
      </div>

      <div className="flex flex-col md:flex-col h-[80vh] gap-4 md:mt-8 items-center justify-start">
        <a
          href="https://www.linkedin.com/in/jeane-vitória-félix-da-silva-396677140"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center w-48 h-28 gap-2 border border-[#101016] text-[#101016] bg-[#f5f2f9] px-4 py-2 rounded hover:bg-[#101016] hover:text-[#f5f2f9] transition"
        >
          <FaLinkedin size={35} />
          <Typography sx={{ fontSize: '16px' }}>LinkedIn</Typography>
          <Typography sx={{ fontSize: '10px' }}>Jeane Vitória</Typography>
        </a>
        <a
          href="https://github.com/jeanevitoria"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 w-48 h-28 border border-[#101016] text-[#101016] bg-[#f5f2f9] px-4 py-2 rounded hover:bg-[#101016] hover:text-[#f5f2f9] transition"
        >
          <FaGithub size={35} />
          <Typography sx={{ fontSize: '16px' }}>GitHub</Typography>
          <Typography sx={{ fontSize: '10px' }}>jeanevitoria</Typography>
        </a>
        <a
          href="mailto:jeanevitoria994@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 w-48 h-28 border border-[#101016] text-[#101016] bg-[#f5f2f9] px-4 py-2 rounded hover:bg-[#101016] hover:text-[#f5f2f9] transition"
        >
          <FaEnvelope size={35} />
          <Typography sx={{ fontSize: '16px' }}>E-mail</Typography>
          <Typography sx={{ fontSize: '10px' }}>jeanevitoria994@gmail.com</Typography>
        </a>
      </div>
    </section>
  );
});

export default Contact;
