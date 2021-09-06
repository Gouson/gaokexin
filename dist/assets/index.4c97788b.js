var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,c=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&o(e,n,t[n]);if(l)for(var n of l(t))r.call(t,n)&&o(e,n,t[n]);return e};import{s as i,R as m,U as u,r as s,B as d,S as p,a as E,b as h}from"./vendor.5eda299a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const g=i.div`
   padding: 0 0 10px 20px;
`,f=i.h4`
    display: inline-block;
    padding: 10px 0;
    border
`,b=e=>m.createElement(g,null,m.createElement(f,null,e.projectName),e.content),y=i.div`
    display: flex;
    justify-content: center;
    padding: 0 20px;
`,v=i.div`
    flex: 1;
    padding: 0 20px 0  0;
    position: relative;
`,w=i.div`
     flex:3;
     padding: 10px 0  10px 20px ;
`,x=i.h3`
    display: inline-block;
    padding: 10px 0;
`,k=i.span`
`,S=i.p`
    font-size: 1em;
    font-weight: 300;
    line-height: 1.4;
    padding: 10px 0;
`,_=i.div`
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
`,j=e=>m.createElement(y,null,m.createElement(v,null,m.createElement(x,null,e.data&&e.data.companyName),m.createElement(k,null,e.data&&e.data.dateRange),m.createElement(S,{dangerouslySetInnerHTML:{__html:e.data&&e.data.companyContent}}),m.createElement(_,null)),m.createElement(w,null,e.data&&e.data.projects.map(((e,t)=>m.createElement(b,{key:t,projectName:e.projectName,content:e.content}))))),N=i.svg`
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
`,L=e=>{const o=e,{name:i}=o,u=((e,t)=>{var n={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&r.call(e,o)&&(n[o]=e[o]);return n})(o,["name"]);return m.createElement(N,(s=c({},u),t(s,n({"aria-hidden":"true"}))),e.name&&m.createElement("use",{xlinkHref:"#"+e.name}));var s},V=i.div`
    background: #eee;
    padding: 20px 0;
    color: #121314;
`,O=i.h1`
    text-align: center;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
`,R=i.h2`
    text-align: left;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 22px;
    padding: 20px;
`,z=i.p`
    font-weight: 400;
    line-height: 2;
    text-align: center;
`,M=i.article`
    width: 21cm;
    min-height:29.7cm;
    background: white;
    margin:0 auto;
    overflow:auto;
    padding: 1em;
`,C=i.section`
    padding: 10px 0;
`,I=i.div`
    height: 2px;
    background: #121314;
`,H=i.p`
    font-size: 1em;
    font-weight: 300;
    line-height: 1.4;
    padding: 0.5em 0;
`,T=i.li`
    font-size: 1em;
    font-weight: 350;
    line-height: 1.1;
    padding: 0.3em 0;
`,U=i.span`
    color: #f39c12;
    font-weight: 500;
`,B=i.a`
    text-decoration: none;
    color: #1e90ff;
    cursor: pointer;
`,G=()=>{const e={companyName:"北京成公教育咨询有限责任公司",dateRange:"2017.9-2019.5",companyContent:"主要负责公司线上业务的开发与维护，建立线上业务。开发维护线上报名管理系统，解决了线下报名难以筛选的陈旧问题。开发维护公司微信小程序，投入实际生产。",projects:[{projectName:"成公教育报名管理系统",content:m.createElement("div",null,m.createElement(H,null,"此项目主要解决了此前线下报名流程的诸多问题，比如学生资料和课程的筛选问题，每个班级会包含不同课程的学生以及部分课程的限额问题。从人工从表格中筛选统计到线上系统的自动统计与筛选，大大提高了工作效率。"),m.createElement(H,null,"管理后台使用",m.createElement(U,null,"SrpingMVC"),"框架开发，前端使用",m.createElement(U,null,"Vue"),"脚手架搭建开发，并配套了",m.createElement(U,null,"微信小程序"),"更易于在手机上操作。"))}]},t={companyName:"北京嘉韵楷达气象科技有限公司",dateRange:"2019.5-至今",companyContent:"负责公司气象业务产品的前端工作，主要包含气象数据服务平台，数据中台，以及国家气象局相关业务。",projects:[{projectName:"中国兴农网",content:m.createElement("div",null,m.createElement(H,null,"本项目由中国气象局交由我司开发并维护，属于陈旧项目。因历史原因，需要在其此前定制的CMS系统中开发并维护，由于内部特殊的编译模板以及文件管理、路径配置的特殊性，很多框架或者打包工具不能在平台中使用，导致了代码耦合度高，难以管理维护。"),m.createElement(H,null,"我在开发与维护过程中，将现有以及之后的开发流程做了重新规划。 比如，将一些代码通过CDN引入的方式使用",m.createElement(U,null,"Vue"),"开发成模块，并在新的路径文件中，统一配置了站点的路径管理。网站中还有一些复用性较强的业务，我把这些模块统一封装为公共组件， 比如多个页面使用的地图模块（",m.createElement(U,null,"Leaflet/天地图/Echarts"),"），专题业务中，一些常用的布局以及文字图片排版风格都做了特殊封装，使后续工作得以提高效率。"))},{projectName:"嘉韵楷达气象数字中台",content:m.createElement("div",null,m.createElement(H,null,"本中台主要服务于公司内部业务，通过对气象数据的资源管理，对各产品的气象服务进行更细化的分类。把个数据指标按照不同的维度/参数/时间等标准进行分类组合。根据接口模板生成的数据产品以及业务产品可以满足各种不同项目的需求。"),m.createElement(H,null,"开发过程中，使用",m.createElement(U,null,"Vue/VueRouter"),"搭建，并使用了",m.createElement(U,null,"Element"),"组件库， 依赖",m.createElement(U,null,"axios"),"搭建接口服务，使用",m.createElement(U,null,"lodash"),"来进行一些数据操作，",m.createElement(U,null,"Echarts"),"绘制图表，使用",m.createElement(U,null,"webpack"),"进行打包。"))},{projectName:"马来西亚新能源智慧气象服务",content:m.createElement("div",null,m.createElement(H,null,"该项目是公司与马来西亚政府相关部门关于光伏业务的平台搭建，展示了光伏数据的实况监测，预报情况，历史情况，风能预测等数据可视化内容。包含一定时间轴内的色斑图播放，数据的图表趋势展示，地图选点农业作物信息展示。"),m.createElement(H,null,"开发使用了",m.createElement(U,null,"Vue"),"框架，因为非本土项目，使用",m.createElement(U,null,"i18n"),"做了国际化处理，可以一键切换语言。 因网络原因，底图没有使用国家官方提供的天地图服务，而使用了Google Map服务。 关于色斑图播放功能，开发了",m.createElement(U,null,"时间轴播放组件"),"，可以播放暂停，前进帧后退帧，在多个路由中重复引用。 本项目的光伏数据因为前期没有经过后端的数据清洗与处理，写了一个数据处理函数把光伏的原始数据处理成可供开发使用的JSON数据。"))},{projectName:"中交三航智慧气象服务平台",content:m.createElement("div",null,m.createElement(H,null,"该平台中交第三航务工程局有限公司定制开发，平台为客户海上作业提供气象服务，包括工程地点气象数据，台风风场，预警预报，统计查询等。中途经过一次大的改版，加入了Echarts图表内容，将风俗风向信息与折线图相结合，内容更直观。"),m.createElement(H,null,"Vue开发，项目中使用了",m.createElement(U,null,"proj4.js"),"（投影坐标转换）、",m.createElement(U,null,"coordtransform"),"（坐标位置转换）等有关WebGIS的依赖包， 风场的粒子效果使用了",m.createElement(U,null,"Leaflet"),"中的velocity图层。 封装了地图上的",m.createElement(U,null,"marker点聚合展开"),"业务逻辑，封装了海上台风",m.createElement(U,null,"路线移动模块"),"，用路线坐标点参数来控制台风移动。 封装了根据风俗风向原始数据转换为不同角度的",m.createElement(U,null,"箭头Icon组件"),"。"))},{projectName:"农田管家",content:m.createElement("div",null,m.createElement(H,null,"H5项目搭配后台管理系统，主要服务于个人农户，包括农业方面的咨询与服务，产量预测，收成记录，地块管理，气象预报等功能。"),m.createElement(H,null,"使用",m.createElement(U,null,"Vite+Vue3+TypeScript"),"搭建，",m.createElement(U,null,"VueX+Token+Vue-Router"),"动态路由管理用户权限， UI构建采用",m.createElement(U,null,"VantUI")," ，使用",m.createElement(U,null,"axios"),"提供接口服务。 各种表单提交中，封装了涉及到农业站点与全国省市县级联选择，封装了表单验证函数。 气象预报服务中，因业务需求，要有两条温度线同时出现，并出现在正确位置上，做了一些",m.createElement(U,null,"Echarts"),"的配置，使其更好的满足业务需求。"))}]},n={projectName:"GOUSON UI",content:m.createElement("div",null,m.createElement(H,null,"这个项目期初是因为使用Element的过程中萌生做组件库的想法，正好",m.createElement(U,null,"Vue3"),"与",m.createElement(U,null,"Vite"),"推出，利用这个机会，配合",m.createElement(U,null,"TypeScript"),"练习一下Vue3的新特性Compnent API。"),m.createElement(H,null,"目前做了Switch组件，Button组件，Dialog组件，Tabs组件。其他功能还在进一步开发建设中。"),m.createElement(H,null,"Tabs组件开发过程中，遇到了component内容不更新的问题，查看了官方的issues，发现component需要配合:key改变内容。"),m.createElement(H,null,"页面中展示更漂亮的代码，采用了prismjs库。"),m.createElement(H,null,"使用了",m.createElement(U,null,"bash脚本"),"自动一键打包上传更新"),m.createElement(H,null,m.createElement(B,{href:"https://gouson.github.io/gouson-ui-1/index.html",target:"_blank"},"预览地址"),"  ",m.createElement(B,{href:"https://github.com/Gouson/Vue3Wheel/tree/master/gouson-ui-1",target:"_blank"},"源码链接")))},l={projectName:"彩虹记账本",content:m.createElement("div",null,m.createElement(H,null,"简单好用的脱机记账工具，为满足个人使用而独立开发的一款移动端记账应用。"),m.createElement(H,null,m.createElement(U,null,"React")," / ",m.createElement(U,null,"React Router")," / ",m.createElement(U,null,"自定义 Hooks")," / ",m.createElement(U,null,"webpack")," / ",m.createElement(U,null,"TypeScript")," / ",m.createElement(U,null,"LocalStorage")," / ",m.createElement(U,null,"SVG Icon")," / ",m.createElement(U,null,"styled-components")),m.createElement(H,null,"该项目加深了我对 React Hooks，React函数组件，TypeScript以及SVG Icon的了解，项目收获记录在语雀中。"),m.createElement(H,null,m.createElement(B,{href:"https://gouson.github.io/rainbow-bookkeeping/",target:"_blank"},"预览地址"),"  ",m.createElement(B,{href:"https://github.com/Gouson/icebookkeeping-react",target:"_blank"},"源码链接")))},a={projectName:"ES6 / CSS3 / HTML5",content:m.createElement("div",null,m.createElement(T,null,m.createElement(U,null,"VUE")," / VUEX / Vue Router / ",m.createElement(U,null,"React")," / React Router / ",m.createElement(U,null,"TypeScript")," "),m.createElement(T,null,"Node.js / Cypress自动化测试"),m.createElement(T,null,"AJAX / HTTP协议 / Lodash ..."),m.createElement(T,null,"JQuery / ElementUI / ",m.createElement(U,null,"Echarts")," / Lodash / Express..."),m.createElement(T,null,m.createElement(U,null,"Webpack")," / Gulp / Parcel"),m.createElement(T,null,"SQL / TypeORM"))};return m.createElement(V,null,m.createElement(M,null,m.createElement(C,null,m.createElement(O,null,"高克鑫"),m.createElement(z,null,m.createElement(L,{name:"code"})," 前端工程师 |  ",m.createElement(L,{name:"telephone"})," 17611167607 |  ",m.createElement(L,{name:"email"})," gouson@qq.com"),m.createElement(z,null,m.createElement(L,{name:"edu"})," 石家庄学院 软件工程 本科 2013-2017")),m.createElement(I,null),m.createElement(C,null,m.createElement(R,null,"主要使用技术栈"),m.createElement("div",null,m.createElement(b,c({},a)))),m.createElement(C,null,m.createElement(R,null,"工作与项目经历"),m.createElement("div",null,m.createElement(j,{data:e}),m.createElement(j,{data:t}))),m.createElement(C,null,m.createElement(R,null,"个人项目"),m.createElement(b,c({},l)),m.createElement(b,c({},n)))))},q=u`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`,P=u`
    from{
        width:0ch;
    }
    to{
        width:1ch;
    }
`,A=i.div`
    padding: 5vh 10vw;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(10px + 0.33vw);
    -webkit-font-smoothing: antialiased;
    color: #121314;
    overflow: hidden;
    height: 100vh;

`,F=i.h1`
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
        animation: ${q} 1.1s steps(2,jump-none) infinite;
    }
`,$=i.span`
        display: inline-block;
        overflow: hidden;
        width:0ch;
        animation: ${P} 0.1s ease-in-out forwards;
        animation-delay: ${e=>e.delay?`${e.delay}s`:"10s"};
`,D=i.p`
    font-size: 1.6em;
    font-weight: 300;
    line-height: 1.4;
    max-width: 28em;
`,W=i.a`
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
`,J=u`
    from {
        margin-top: 100vh;
    }
    to{
        margin-top: 0;
    }
`,X=i.div`
    margin-top: 100vh;
    &.visiable{
        animation:${J} 1s forwards ease-in;
    }
`,Q=()=>{const e="Hi,I am Gouson".split(""),[t,n]=s.exports.useState(!1);return m.createElement(A,null,m.createElement(F,{className:t?"ended":"",onAnimationEnd:e=>{e.target===document.querySelector("h1 span:last-child")&&n(!0)}},e.map(((e,t)=>m.createElement($,{key:t,delay:.1*t+1},e)))),m.createElement(X,{className:t?"visiable":""},m.createElement(D,null,"A web front-end engineers,chinese name is 高克鑫.There are my ",m.createElement(W,{href:"https://github.com/Gouson",target:"_blank"}," GitHub")," , ",m.createElement(W,{href:"https://www.yuque.com/gouson",target:"_blank"},"Yuque")," , ",m.createElement(W,{href:"https://weibo.com/u/6410825202",target:"_blank"},"Weibo")),m.createElement(D,null,"If it's about work, please email me ",m.createElement(W,{href:"mailto:gaokx36@gmail.com"},"gaokx36@gmail.com")," or ",m.createElement(W,{href:"mailto:gouson@qq.com"},"gouson@qq.com"))))};function K(){return m.createElement(d,null,m.createElement(p,null,m.createElement(E,{path:"/cv"},m.createElement(G,null)),m.createElement(E,{path:"/"},m.createElement(Q,null))))}if("undefined"!=typeof window){let e=function(){let e=document.body,t=document.getElementById("__svg__icons__dom__1630914986311__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__1630914986311__"),t.innerHTML='<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="code"><path d="M322.133 296.533c-12.8-12.8-32-12.8-44.8 0l-192 192c-12.8 12.8-12.8 32 0 44.8l192 192c6.4 6.4 14.934 8.534 23.467 8.534s17.067-2.134 23.467-8.534c12.8-12.8 12.8-32 0-44.8L151.467 512 320 343.467c12.8-12.8 12.8-34.134 2.133-46.934zm618.667 192-192-192c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l168.533 168.534L704 678.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l192-192c8.534-8.533 8.534-29.867-2.133-42.667zM622.933 76.8c-17.066-4.267-34.133 6.4-38.4 23.467L366.933 902.4c-4.266 17.067 6.4 34.133 23.467 38.4 2.133 0 6.4 2.133 8.533 2.133 14.934 0 27.734-8.533 29.867-23.466L644.267 115.2c4.266-17.067-4.267-34.133-21.334-38.4z" /></symbol><symbol class="icon" viewBox="0 0 1120 1024" xmlns="http://www.w3.org/2000/svg" id="edu"><path d="M1081.373 410.81c24.82-14.68 39.22-37.484 39.22-62.642s-14.231-47.961-39.22-62.64L625.57 16.584c-37.26-22.076-93.29-22.076-130.717-.056L39.221 285.527C14.23 300.207 0 323.011 0 348.168s14.232 47.962 39.22 62.642l121.921 72.054 1.345 365.985A118.839 118.839 0 0 0 233.7 957.435a799.095 799.095 0 0 0 320.994 66.563 778.812 778.812 0 0 0 343.181-79.394 95.25 95.25 0 0 0 53.004-84.044l2.914-374.11zM538.333 90.208a53.172 53.172 0 0 1 43.927 0l437.032 257.736L582.26 605.681a53.172 53.172 0 0 1-43.927 0L233.42 426.16a42.75 42.75 0 0 0-16.81-10.029l-115.364-67.964zM865.21 859.663a8.853 8.853 0 0 1-4.818 8.012 684.907 684.907 0 0 1-305.698 70.766 713.594 713.594 0 0 1-286.816-59.448 33.282 33.282 0 0 1-19.667-30.48l-1.288-315.055 247.931 146.63a137.833 137.833 0 0 0 130.885 0l241.992-142.82z" /><path d="M1076.442 453.672a42.75 42.75 0 0 0-42.75 42.75v370.75a42.807 42.807 0 0 0 85.557 0v-370.75a42.807 42.807 0 0 0-42.807-42.75z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="email"><path d="M874.667 181.333H149.333c-40.533 0-74.666 34.134-74.666 74.667v512c0 40.533 34.133 74.667 74.666 74.667h725.334c40.533 0 74.666-34.134 74.666-74.667V256c0-40.533-34.133-74.667-74.666-74.667zm-725.334 64h725.334c6.4 0 10.666 4.267 10.666 10.667v25.6L512 516.267 138.667 281.6V256c0-6.4 4.266-10.667 10.666-10.667zm725.334 533.334H149.333c-6.4 0-10.666-4.267-10.666-10.667V356.267l356.266 224c4.267 4.266 10.667 4.266 17.067 4.266s12.8-2.133 17.067-4.266l356.266-224V768c0 6.4-4.266 10.667-10.666 10.667z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="telephone"><path d="M817.067 586.667c-32-4.267-64-12.8-96-23.467-38.4-14.933-81.067-4.267-110.934 23.467L582.4 614.4C512 569.6 452.267 512 409.6 441.6l27.733-27.733c27.734-29.867 38.4-72.534 23.467-110.934-10.667-29.866-19.2-61.866-23.467-96-6.4-51.2-51.2-89.6-104.533-89.6H224c-32 0-59.733 12.8-78.933 34.134-19.2 21.333-29.867 51.2-27.734 81.066 12.8 117.334 53.334 230.4 117.334 328.534 57.6 91.733 136.533 170.666 228.266 228.266 98.134 64 211.2 104.534 328.534 117.334H800c25.6 0 51.2-10.667 70.4-27.734 21.333-19.2 34.133-49.066 34.133-76.8v-108.8C908.8 640 868.267 595.2 817.067 586.667zm25.6 106.666v108.8c0 10.667-4.267 23.467-12.8 29.867-8.534 8.533-19.2 10.667-29.867 10.667C693.333 832 588.8 793.6 499.2 736 416 682.667 343.467 610.133 290.133 526.933c-57.6-89.6-96-194.133-106.666-300.8 0-10.666 2.133-23.466 10.666-32 8.534-8.533 19.2-12.8 29.867-12.8h108.8c21.333 0 38.4 14.934 40.533 34.134 4.267 36.266 14.934 74.666 27.734 108.8 6.4 14.933 2.133 32-8.534 42.666L345.6 413.867c-10.667 10.666-12.8 25.6-4.267 38.4 55.467 96 134.4 174.933 230.4 230.4 12.8 6.4 27.734 4.266 38.4-4.267l46.934-46.933c10.666-10.667 27.733-14.934 42.666-8.534 36.267 12.8 72.534 21.334 108.8 27.734 19.2 2.133 34.134 19.2 34.134 42.666 0-2.133 0-2.133 0 0z" /></symbol>',e.insertBefore(t,e.firstChild)};"interactive"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}h.render(m.createElement(m.StrictMode,null,m.createElement(K,null)),document.getElementById("root"));
