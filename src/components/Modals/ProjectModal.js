import React from 'react'
import ReactDOM from 'react-dom'
import { Backdrop } from './BackdropElements'
import { CloseIcon, Content, ExternalLink, Header, ModalContainer, ModalImg, ModalWrap, SourceCode, ModalLinks } from './ProjectModalElements'

const ProjectModal = ({ id,
                        title, 
                        subtitle, 
                        description, 
                        img, gif, link, 
                        repo, closeModal }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={() => closeModal('')} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                    <ModalWrap>
                        <ModalContainer>
                            <Header>
                                <h2>{title}</h2>
                                <CloseIcon onClick={() => closeModal('')}>x</CloseIcon>
                            </Header>
                            <Content>
                                <ModalImg src={img} />
                                <p>{description}</p>
                                <ModalLinks>
                                    <a href={repo} target="_blank" rel="noreferrer"><SourceCode/></a>
                                    <a href={link} target="_blank" rel="noreferrer"><ExternalLink/></a>
                                </ModalLinks>
                            </Content>
                        </ModalContainer> 
                    </ModalWrap>
                ,
                document.getElementById('modal-root')
            )}
        </>
    )
}


export default ProjectModal
