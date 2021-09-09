import React from "react"
import styled from "styled-components"
import Experience from "./Experience"
import Icon from "./Icon"
import Project from "./Project"
const Wrapper = styled.div`
    background: #eee;
    color: #121314;
`
const H1 = styled.h1`
    text-align: center;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
`
const H2 = styled.h2`
    text-align: left;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 22px;
    padding: 20px;
`
const P = styled.p`
    font-weight: 400;
    line-height: 2;
    text-align: center;
`
const Article = styled.article`
    width: 21cm;
    min-height:29.7cm;
    background: white;
    margin:0 auto;
    overflow:auto;
    padding: 1em;
`
const Section = styled.section`
    padding: 10px 0;
`
const Line = styled.div`
    height: 2px;
    background: #121314;
`
const P2 = styled.p`
    font-size: 1em;
    font-weight: 300;
    line-height: 1.4;
    padding: 0.5em 0;
`
const P3 = styled.li`
    font-size: 1em;
    font-weight: 350;
    line-height: 1.1;
    padding: 0.3em 0;
`
const LightSpan = styled.span`
    color: #f39c12;
    font-weight: 500;
`
const A = styled.a`
    text-decoration: none;
    color: #1e90ff;
    cursor: pointer;
`
const Cv = () => {
    const comp1 = {
        companyName: '北京成公教育咨询有限责任公司',
        dateRange: '2017.9-2019.5',
        companyContent: '主要负责公司线上业务的开发与维护，建立线上业务。开发维护线上报名管理系统，解决了线下报名难以筛选的陈旧问题。开发维护公司微信小程序，投入实际生产。',
        projects: [
            {
                projectName: '成公教育报名管理系统',
                content: <div>
                    <P2>此项目主要解决了此前线下报名流程的诸多问题，比如学生资料和课程的筛选问题，每个班级会包含不同课程的学生以及部分课程的限额问题。从人工从表格中筛选统计到线上系统的自动统计与筛选，大大提高了工作效率。
                    </P2>
                    <P2>管理后台使用<LightSpan>SrpingMVC</LightSpan>框架开发，前端使用<LightSpan>Vue</LightSpan>脚手架搭建开发，并配套了<LightSpan>微信小程序</LightSpan>更易于在手机上操作。</P2>
                </div>,
            }
        ]
    }
    const comp2 = {
        companyName: '北京嘉韵楷达气象科技有限公司',
        dateRange: '2019.5-至今',
        companyContent: '负责公司气象业务产品的前端开发与优化工作，主要包含气象数据服务平台，数据中台，以及国家气象局相关业务。',
        projects: [
            {
                projectName: '中国兴农网',
                content: <div>
                    <P2>本项目由中国气象局交由我司开发并维护，属于陈旧项目。因历史原因，需要在其此前定制的CMS系统中开发并维护，由于内部特殊的编译模板以及文件管理、路径配置的特殊性，很多框架或者打包工具不能在平台中使用，导致了代码耦合度高，难以管理维护。
                    </P2>
                    <P2>我在开发与维护过程中，将现有以及之后的开发流程做了重新规划。
                        比如，将一些代码通过CDN引入的方式使用<LightSpan>Vue</LightSpan>开发成模块，并在新的路径文件中，统一配置了站点的路径管理。网站中还有一些复用性较强的业务，我把这些模块统一封装为公共组件，
                        比如多个页面使用的地图模块（<LightSpan>Leaflet/天地图/Echarts</LightSpan>），专题业务中，一些常用的布局以及文字图片排版风格都做了特殊封装，使后续工作得以提高效率。
                    </P2>
                </div>,
            }, {
                projectName: '嘉韵楷达气象数字中台',
                content: <div>
                    <P2>本中台主要服务于公司内部业务，通过对气象数据的资源管理，对各产品的气象服务进行更细化的分类。把个数据指标按照不同的维度/参数/时间等标准进行分类组合。根据接口模板生成的数据产品以及业务产品可以满足各种不同项目的需求。</P2>
                    <P2>开发过程中，使用<LightSpan>Vue/VueRouter</LightSpan>搭建，并使用了<LightSpan>Element</LightSpan>组件库，
                        依赖<LightSpan>axios</LightSpan>搭建接口服务，使用<LightSpan>lodash</LightSpan>来进行一些数据操作，<LightSpan>Echarts</LightSpan>绘制图表，使用<LightSpan>webpack</LightSpan>进行打包。</P2>
                </div>,
            }, {
                projectName: '马来西亚新能源智慧气象服务',
                content: <div>
                    <P2>该项目是公司与马来西亚政府相关部门关于光伏业务的平台搭建，展示了光伏数据的实况监测，预报情况，历史情况，风能预测等数据可视化内容。包含一定时间轴内的色斑图播放，数据的图表趋势展示，地图选点农业作物信息展示。</P2>
                    <P2>开发使用了<LightSpan>Vue</LightSpan>框架，因为非本土项目，使用<LightSpan>i18n</LightSpan>做了国际化处理，可以一键切换语言。
                        因网络原因，底图没有使用国家官方提供的天地图服务，而使用了Google Map服务。
                        关于色斑图播放功能，开发了<LightSpan>时间轴播放组件</LightSpan>，可以播放暂停，前进帧后退帧，在多个路由中重复引用。
                        本项目的光伏数据因为前期没有经过后端的数据清洗与处理，写了一个数据处理函数把光伏的原始数据处理成可供开发使用的JSON数据。
                    </P2>
                </div>,
            },
            {
                projectName: '中交三航智慧气象服务平台',
                content: <div>
                    <P2>该平台中交第三航务工程局有限公司定制开发，平台为客户海上作业提供气象服务，包括工程地点气象数据，台风风场，预警预报，统计查询等。中途经过一次大的改版，加入了Echarts图表内容，将风俗风向信息与折线图相结合，内容更直观。</P2>
                    <P2>Vue开发，项目中使用了<LightSpan>proj4.js</LightSpan>（投影坐标转换）、<LightSpan>coordtransform</LightSpan>（坐标位置转换）等有关WebGIS的依赖包，
                        风场的粒子效果使用了<LightSpan>Leaflet</LightSpan>中的velocity图层。
                        封装了地图上的<LightSpan>marker点聚合展开</LightSpan>业务逻辑，封装了海上台风<LightSpan>路线移动模块</LightSpan>，用路线坐标点参数来控制台风移动。
                        封装了根据风俗风向原始数据转换为不同角度的<LightSpan>箭头Icon组件</LightSpan>。
                    </P2>
                </div>,
            },
            {
                projectName: '农田管家',
                content: <div>
                    <P2>H5项目搭配后台管理系统，主要服务于个人农户，包括农业方面的咨询与服务，产量预测，收成记录，地块管理，气象预报等功能。</P2>
                    <P2>使用<LightSpan>Vite+Vue3+TypeScript</LightSpan>搭建，<LightSpan>VueX+Token+Vue-Router</LightSpan>动态路由管理用户权限，
                        UI构建采用<LightSpan>VantUI</LightSpan> ，使用<LightSpan>axios</LightSpan>提供接口服务。
                        各种表单提交中，封装了涉及到农业站点与全国省市县级联选择，封装了表单验证函数。
                        气象预报服务中，因业务需求，要有两条温度线同时出现，并出现在正确位置上，做了一些<LightSpan>Echarts</LightSpan>的配置，使其更好的满足业务需求。
                    </P2>
                </div>,
            }
        ]
    }
    const personP1 = {
        projectName: 'GOUSON UI',
        content: <div>
            <P2>这个项目期初是因为使用Element的过程中萌生做组件库的想法，正好<LightSpan>Vue3</LightSpan>与<LightSpan>Vite</LightSpan>推出，利用这个机会，配合<LightSpan>TypeScript</LightSpan>练习一下Vue3的新特性Compnent API。</P2>
            <P2>目前做了Switch组件，Button组件，Dialog组件，Tabs组件。其他功能还在进一步开发建设中。</P2>
            <P2>Tabs组件开发过程中，遇到了component内容不更新的问题，查看了官方的issues，发现component需要配合:key改变内容。</P2>
            <P2>页面中展示更漂亮的代码，采用了prismjs库。</P2>
            <P2>使用了<LightSpan>bash脚本</LightSpan>自动一键打包上传更新</P2>
            <P2><A href="https://gouson.github.io/gouson-ui-1/index.html" target="_blank">预览地址</A> &nbsp;
                <A href="https://github.com/Gouson/Vue3Wheel/tree/master/gouson-ui-1" target="_blank">源码链接</A>
            </P2>
        </div>
    }
    const personP2 = {
        projectName: '彩虹记账本',
        content: <div>
            <P2>简单好用的脱机记账工具，为满足个人使用而独立开发的一款移动端记账应用。</P2>
            <P2><LightSpan>React</LightSpan> / <LightSpan>React Router</LightSpan> / <LightSpan>自定义 Hooks</LightSpan> / <LightSpan>webpack</LightSpan> / <LightSpan>TypeScript</LightSpan> / <LightSpan>LocalStorage</LightSpan> / <LightSpan>SVG Icon</LightSpan> / <LightSpan>styled-components</LightSpan></P2>
            <P2>该项目加深了我对 React Hooks，React函数组件，TypeScript以及SVG Icon的了解，项目收获记录在语雀中。</P2>
            <P2><A href="https://gouson.github.io/rainbow-bookkeeping/" target="_blank">预览地址</A> &nbsp;
                <A href="https://github.com/Gouson/icebookkeeping-react" target="_blank">源码链接</A>
            </P2>
        </div>
    }
    const skill1 = {
        projectName: 'ES6 / CSS3 / HTML5',
        content: <div>
            <P3><LightSpan>VUE</LightSpan> / VUEX / Vue Router / <LightSpan>React</LightSpan> / React Router / <LightSpan>TypeScript</LightSpan> </P3>
            <P3>Node.js / Cypress自动化测试</P3>
            <P3>AJAX / HTTP协议 / Lodash ...</P3>
            <P3>JQuery / ElementUI / <LightSpan>Echarts</LightSpan> / Lodash / Express...</P3>
            <P3><LightSpan>Webpack</LightSpan> / Gulp / Parcel</P3>
            <P3>SQL / TypeORM</P3>
        </div>
    }
    return (
        <Wrapper>
            <Article>
                <Section>
                    <H1>高克鑫</H1>
                    <P>
                        <Icon name="code" /> 前端工程师 | &nbsp;
                        <Icon name="telephone" /> 17611167607 | &nbsp;
                        <Icon name="email" /> gouson@qq.com | &nbsp;
                        <Icon name="wechat" /> shangbanyinghan
                    </P>
                    <P>
                        <Icon name="edu" /> 石家庄学院 软件工程 本科 2013-2017
                    </P>
                </Section>
                <Line />
                <Section>
                    <H2>主要使用技术栈</H2>
                    <div>
                        <Project {...skill1} />
                    </div>
                </Section>
                <Section>
                    <H2>工作与项目经历</H2>
                    <div>
                        <Experience data={comp2} />
                        <Experience data={comp1} />
                    </div>
                </Section>
                <Section>
                    <H2>个人项目</H2>
                    <Project {...personP2} />
                    <Project {...personP1} />
                </Section>
            </Article>
        </Wrapper>

    )
}

export default Cv
