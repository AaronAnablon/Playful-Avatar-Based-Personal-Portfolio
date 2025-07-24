import { ReactElement } from 'react';
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
  SiCsharp,
  SiTauri,
  SiVisualstudio
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaRust } from "react-icons/fa";

interface SkillCard {
  id: number;
  card: ReactElement;
  desc: string;
}

const cards: SkillCard[] = [
  { id: 1, card: <SiCss3 className="w-full h-full" />, desc: 'CSS' },
  { id: 2, card: <SiJavascript className="w-full h-full" />, desc: 'JAVASCRIPT' },
  { id: 3, card: <SiReact className="w-full h-full" />, desc: 'REACT' },
  { id: 4, card: <SiTailwindcss className="w-full h-full" />, desc: 'TAILWIND' },
  { id: 5, card: <SiBootstrap className="w-full h-full" />, desc: 'BOOTSTRAP' },
  { id: 6, card: <SiNodedotjs className="w-full h-full" />, desc: 'NODE JS' },
  { id: 7, card: <SiMongodb className="w-full h-full" />, desc: 'MONGODB' },
  { id: 8, card: <SiMysql className="w-full h-full" />, desc: 'MYSQL' },
  { id: 9, card: <SiCsharp className="w-full h-full" />, desc: 'C#' },
  { id: 10, card: <SiHtml5 className="w-full h-full" />, desc: 'HTML' },
  { id: 11, card: <SiTauri className="w-full h-full" />, desc: 'TAURI' },
  { id: 12, card: <TbBrandReactNative className="w-full h-full" />, desc: 'REACT NATIVE' },
  { id: 13, card: <FaRust className="w-full h-full" />, desc: 'RUST' },
  { id: 14, card: <SiVisualstudio className="w-full h-full" />, desc: 'VISUAL BASIC' },
]

export default cards;
