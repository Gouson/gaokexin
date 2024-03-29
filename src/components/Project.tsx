import React, { JSXElementConstructor, ReactElement, useState } from "react"
import styled from "styled-components"

type ProjectType = {
    projectName: string;
    content: ReactElement;
}
const Wrapper = styled.div`
   padding: 0 0 10px 20px;
`
const H4 = styled.h4`
    display: inline-block;
    padding: 10px 0;
    border
`
const Project = (props: ProjectType) => {
    return (
        <Wrapper>
            <H4>{props.projectName}</H4>
            {props.content}
        </Wrapper>
    )
}

export default Project