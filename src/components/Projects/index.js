import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectH2, ProjectsCard, ProjectP, Hover, DisplayOver  } from './ProjectsElements';
import Data from './projects.json'
const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
            { Data.map(project => {
                return (
                    <ProjectsCard background={project.img} key={project.id}>
                    <DisplayOver>
                        <Hover>
                            <ProjectH2>{project.title}</ProjectH2>
                            <ProjectP>{project.subtitle}</ProjectP>
                        </Hover>
                    </DisplayOver>
                </ProjectsCard>
                )
            })}
            </ProjectsWrapper> 
  
        </ProjectsContainer>
    )
}

export default Projects
