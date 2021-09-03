import React from "react"
import styled from "styled-components"
// import email from '../assets/icon/email'
import { telephone } from '../assets/icon/telephone.svg'
type Props = {
    name?: string,
} & React.SVGAttributes<SVGElement>
const SVG = styled.svg`
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
`
const Icon = (props: Props) => {
    const { name, ...rest } = props
    return (
        <SVG {...rest} aria-hidden="true">
            {props.name && <use xlinkHref={'#' + props.name} />}
        </SVG>
    )
}

export default Icon
