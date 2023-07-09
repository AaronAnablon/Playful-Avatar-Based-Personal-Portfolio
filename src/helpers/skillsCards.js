import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiReact,
    SiBootstrap,
    SiMongodb,
    SiMysql,
    SiJavascript,
    SiNodedotjs,
    SiCsharp
  } from "react-icons/si";

const cards = [
    { id: 1, card: <SiCss3 className="w-full h-full" />, desc: 'CSS' },
    { id: 2, card: <SiJavascript className="w-full h-full" />, desc: 'JAVASCRIPT' },
    { id: 3, card: <SiReact className="w-full h-full" />, desc: 'REACT' },
    { id: 4, card: <SiTailwindcss className="w-full h-full" />, desc: 'TAILWIND' },
    { id: 5, card: <SiBootstrap className="w-full h-full" />, desc: 'BOOTSTRAP' },
    { id: 6, card: <SiNodedotjs className="w-full h-full" />, desc: 'NODE JS' },
    { id: 7, card: <SiMongodb className="w-full h-full" />, desc: 'MONGODB' },
    { id: 8, card: <SiMysql className="w-full h-full" />, desc: 'MYSQL' },
    { id: 9, card: <SiCsharp className="w-full h-full" />, desc: 'C#' },
    { id: 11, card: <SiHtml5 className="w-full h-full" />, desc: 'HTML' },
  ]
  export default cards;