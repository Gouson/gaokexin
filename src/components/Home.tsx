import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
interface SpanProps {
    readonly delay: number;
}
const cursor = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`
const text_in = keyframes`
    from{
        width:0ch;
    }
    to{
        width:1ch;
    }
`
const Wrapper = styled.div`
    padding: 5vh 10vw;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(10px + 0.33vw);
    -webkit-font-smoothing: antialiased;
    color: #121314;
    overflow: hidden;
    height: 100vh;

`
const Title = styled.h1`
    display: inline-block;
    margin: 0;
    padding: 0;
    white-space:nowrap;
    font-family: monospace;
    position: relative;
    ::after{
        content: '';
        display: inline-block;
        position: absolute;
        width: 0.3em;
        height:1em;
        background-color: #000;
        border-radius: 2px;
        right:-0.5em;
    }
    &.ended::after{
        animation: ${cursor} 1.1s steps(2,jump-none) infinite;
    }
`
const Span = styled.span<SpanProps>`
        display: inline-block;
        overflow: hidden;
        width:0ch;
        animation: ${text_in} 0.1s ease-in-out forwards;
        animation-delay: ${props => props.delay! ? `${props.delay}s` : `10s`};
`
const P = styled.p`
    font-size: 1.6em;
    font-weight: 300;
    line-height: 1.4;
    max-width: 28em;
`
const A = styled.a`
    text-decoration: none;
    color: #121314;
    position: relative;
    cursor: pointer;
    ::after{
        content: '';
        position: absolute;
        z-index: -1;
        top: 60%;
        left: -0.1em;
        right: -0.1em;
        bottom: 0;
        transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
        background-color:#70a1ff;
    }
    :hover:after {
        top: 0%;
    }
`
const shift = keyframes`
    from {
        margin-top: 100vh;
    }
    to{
        margin-top: 0;
    }
`
const PDiv = styled.div`
    margin-top: 100vh;
    &.visiable{
        animation:${shift} 1s forwards ease-in;
    }
`

const Home = () => {
    const text = `Hi,I am Gouson`
    const textArray = text.split('')
    const [typingEnd, setTypingEnd] = useState(false);
    const animationend: React.AnimationEventHandler<HTMLHeadingElement> | undefined = (e) => {
        if (e.target === document.querySelector('h1 span:last-child')) {
            setTypingEnd(true)
        }
    }
    return (
        <Wrapper>
            <Title className={typingEnd ? 'ended' : ''} onAnimationEnd={animationend}>
                {
                    textArray.map((e, i) =>
                        <Span key={i} delay={i * 0.1 + 1}>{e}</Span>
                    )
                }
            </Title>
            <PDiv className={typingEnd ? 'visiable' : ''}>
                <P>
                    A web front-end engineers,chinese name is 高克鑫.There are my <A href="https://github.com/Gouson" target="_blank"> GitHub</A> , <A href="https://www.yuque.com/gouson" target="_blank">Yuque</A> , <A href="https://weibo.com/u/6410825202" target="_blank">Weibo</A>
                </P>
                <P>
                    If it's about work, please email me <A href="mailto:gaokx36@gmail.com">gaokx36@gmail.com</A > or <A href="mailto:gouson@qq.com">gouson@qq.com</A>
                </P>
            </PDiv>
        </Wrapper>
    )
}

export default Home
