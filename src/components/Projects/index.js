import React, { useState, useEffect } from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectH2, ProjectsCard, ProjectP, Hover, DisplayOver, SeeProject, PlusCircle } from './ProjectsElements';
import ProjectModal from '../Modals/ProjectModal';
import { Fade } from "react-awesome-reveal";
import { projectsData } from './projectsData';

const Projects = () => {
    const [openModal, setOpenModal] = useState('');

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = openModal !== '' ? 'hidden' : 'auto';
      }, [openModal])

    return (
        <ProjectsContainer id='projects'>
            <Fade delay={600} triggerOnce>
                <ProjectsH1>Projects</ProjectsH1>
            </Fade>
            <ProjectsWrapper>
            { projectsData.map(project => {
                return (
                    <div key={project.id}>
                    <Fade delay={1000} cascade triggerOnce>
                        <ProjectsCard onClick={() => {setOpenModal(project.id)}} background={project.img}>
                            <DisplayOver>
                                <Hover>
                                    <ProjectH2>{project.title}</ProjectH2>
                                    <ProjectP>{project.subtitle}</ProjectP>
                                    <SeeProject>
                                        <PlusCircle /> 
                                        <p>More details</p>
                                    </SeeProject>
                                </Hover>
                            </DisplayOver>
                        </ProjectsCard>
                        </Fade>
                        {openModal === project.id && <ProjectModal 
                            id={project.id}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            img={project.img}
                            gif={project.gif}
                            link={project.link} 
                            repo={project.repo}
                            closeModal={setOpenModal}
                        />}
                    </div>
                )
            })}
            </ProjectsWrapper> 
  
        </ProjectsContainer>
    )
}

export default Projects
