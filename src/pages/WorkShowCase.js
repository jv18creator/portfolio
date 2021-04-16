import React from 'react'
import styled from 'styled-components'
import Manage from '../assets/manage.PNG'
// import DevBridge from ''

const MainBox = styled.figure`
    background-color: var(--lightBackCol);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    :hover {
        /* transform: skew(4deg, 10deg); */
        /* transform: scale(1.05) skew(4deg, 10deg); */
        transition: all .3s ease-in;
    }
`;

const ProjectLink = styled.a`
    padding: 5px 30px;
    color: var(--strongOrange);
    border: 3px solid var(--strongOrange);
    text-decoration: none;
    border-radius: 4px;
    :hover {
        background-color: var(--strongOrange);
        color: white;
    }
`;

const ProjectName= styled.h3`
    font-size: 28px;
`


const WorkShowCase = (props) => {
    return (
        <MainBox className='figure'>
            <img src={Manage} style={{width: '100%'}} alt='manage'/>
                <figcaption>
                    <ProjectName>{props.projectname}</ProjectName>
                    <p>{props.subname}</p>
                    <ProjectLink href={props.link} target='_blank' rel="noreferrer">{props.linkname}</ProjectLink>
                </figcaption>
        </MainBox>
    )
}

export default WorkShowCase
