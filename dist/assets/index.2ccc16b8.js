import{s as e,R as t,U as n,r as o,B as r,S as i,a,b as l}from"./vendor.5eda299a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s=e.h1`
    font-size: 1.5em;
    text-align: center;
`,c=()=>t.createElement(s,null,"CV"),m=n`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`,d=n`
    from{
        width:0ch;
    }
    to{
        width:1ch;
    }
`,u=e.h1`
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
        animation: ${m} 1.1s steps(2,jump-none) infinite;
    }
`,p=e.span`
        display: inline-block;
        overflow: hidden;
        width:0ch;
        animation: ${d} 0.1s ease-in-out forwards;
        animation-delay: ${e=>e.delay?`${e.delay}s`:"10s"};
`,f=e.p`
    font-size: 1.6em;
    font-weight: 300;
    line-height: 1.4;
    max-width: 28em;
`,h=e.a`
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
`,g=n`
    from {
        margin-top: 100vh;
    }
    to{
        margin-top: 0;
    }
`,b=e.div`
    margin-top: 100vh;
    &.visiable{
        animation:${g} 1s forwards;
    }
`,y=()=>{const e="Hi,I am Gouson".split(""),[n,r]=o.exports.useState(!1);return t.createElement("div",null,t.createElement(u,{className:n?"ended":"",onAnimationEnd:e=>{e.target===document.querySelector("h1 span:last-child")&&r(!0)}},e.map(((e,n)=>t.createElement(p,{key:n,delay:.1*n+1},e)))),t.createElement(b,{className:n?"visiable":""},t.createElement(f,null,"A web front-end engineers,chinese name is 高克鑫.There are my ",t.createElement(h,{href:"https://github.com/Gouson",target:"_blank"}," GitHub")," , ",t.createElement(h,{href:"https://www.yuque.com/gouson",target:"_blank"},"Yuque")," , ",t.createElement(h,{href:"https://weibo.com/u/6410825202",target:"_blank"},"Weibo")),t.createElement(f,null,"If it's about work, please email me ",t.createElement(h,{href:"mailto:gaokx36@gmail.com"},"gaokx36@gmail.com")," or ",t.createElement(h,{href:"mailto:gouson@qq.com"},"gouson@qq.com"))))};function E(){return t.createElement(r,null,t.createElement(i,null,t.createElement(a,{path:"/cv"},t.createElement(c,null)),t.createElement(a,{path:"/"},t.createElement(y,null))))}l.render(t.createElement(t.StrictMode,null,t.createElement(E,null)),document.getElementById("root"));
