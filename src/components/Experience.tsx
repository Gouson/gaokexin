import React, { JSXElementConstructor,ReactElement, useState } from "react"
import styled from "styled-components"
import Project from "./Project"
type ProjectType = {
    projectName: string;
    content: ReactElement;
}
type Props = {
    data: {
        companyName: string;
        dateRange: string;
        companyContent: string;
        projects: Array<ProjectType>;
    }
}
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 20px;
`
const CompanyDiv = styled.div`
    flex: 1;
    padding: 0 20px 0  0;
    position: relative;
`
const ProjectsDiv = styled.div`
     flex:3;
     padding: 10px 0  10px 20px ;
`
const H3 = styled.h3`
    display: inline-block;
    padding: 10px 0;
`
const TimeSpan = styled.span`
`
const P = styled.p`
    font-size: 1em;
    font-weight: 300;
    line-height: 1.4;
    padding: 10px 0;
`
const TimeLine = styled.div`
    width: 2px;
    height: 100%;
    background: #121314;
    position: absolute;
    right: 0;
    top: 0;
    ::after{
        content:'';
        width: 8px;
        height: 8px;
        border: 2px solid #121314;
        border-radius:50%;
        background: #FFF;
        position: absolute;
        left:50%;
        top:25px;
        transform:translate(-50%)
    }
`
const Experience = (props: Props) => {
    return (
        <Wrapper>
            <CompanyDiv>
                <H3>{props.data && props.data.companyName}</H3>
                <TimeSpan>{props.data && props.data.dateRange}</TimeSpan>
                <P dangerouslySetInnerHTML={{ __html: props.data && props.data.companyContent }} />
                <TimeLine />
            </CompanyDiv>
            <ProjectsDiv>
                {props.data &&
                    props.data.projects.map((project, i) => {
                        return (
                            <Project key={i} projectName={project.projectName} content={project.content} />
                        )
                    })
                }
            </ProjectsDiv>
        </Wrapper>
    )
}

export default Experience