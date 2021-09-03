import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
const Wrapper = styled.div`
    border: 1px solid red;
`
const CompanyDiv = styled.div`
    
`
const ProjectsDiv = styled.div`

`
const H2 = styled.h2`
    display: inline-block;
    border: 1px solid blue;
`
const Experience = () => {
    return (
        <Wrapper>
            <CompanyDiv><H2>XXXXXX</H2></CompanyDiv>
            <ProjectsDiv></ProjectsDiv>

        </Wrapper>
    )
}

export default Experience