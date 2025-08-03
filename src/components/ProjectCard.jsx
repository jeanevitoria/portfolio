import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { FaGithub } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoOpenOutline } from "react-icons/io5";

import { FaHeart, FaShareAlt, FaChevronDown, FaEllipsisV } from 'react-icons/fa';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ProjectCard = ({ title, media, description, technologys, github, site }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                onClick={() => window.open(github ?? site)}
                sx={{ height: '194px', objectFit: 'cover', cursor: 'pointer' }}
                image={media}
                alt="Imagem do projeto"
            />
            <CardActions disableSpacing>
                {github && (
                    <IconButton
                        aria-label="GitHub"
                        component="a"
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </IconButton>
                )}
                {site && (
                    <IconButton
                        aria-label="Abrir site"
                        component="a"
                        href={site}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoOpenOutline />
                    </IconButton>
                )}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <FaChevronDown size={16}/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardHeader
                    title={title}
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
                <CardContent className='grid grid-cols-2 gap-1 text-center'>
                    {technologys.map((tech) => {
                        return <span className='bg-[#262633] p-1 text-white rounded text-sm'>{tech}</span>
                    })}
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ProjectCard;