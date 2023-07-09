import { forwardRef } from 'react';
import { SiHtml5,
  SiCss3, 
  SiTailwindcss, 
  SiReact,
  SiBootstrap, 
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiNodedotjs ,
  SiVisualstudio,
  SiCsharp
 } from "react-icons/si";

function Skills({ title }, ref) {
  return (
    <div ref={ref}>
      <div className="min-h-screen flex align-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 h-max md:grid-cols-3 gap-1 justify-center">
            <div className="rounded-md p-4"><SiHtml5 size={200}/></div>
            <div className="rounded-md p-4"><SiCss3 size={200}/></div>
            <div className="rounded-md p-4"><SiJavascript size={200}/></div>
            <div className="rounded-md p-4"><SiReact size={200}/></div>
            <div className="rounded-md p-4"><SiTailwindcss size={200}/></div>
            <div className="rounded-md p-4"><SiBootstrap size={200}/></div>
            <div className="rounded-md p-4"><SiNodedotjs size={200}/></div>
            <div className="rounded-md p-4"><SiMongodb size={200}/></div>
            <div className="rounded-md p-4"><SiMysql size={200}/></div>
            <div className="rounded-md p-4"><SiCsharp size={200}/></div>
            <div className="rounded-md p-4"><SiVisualstudio size={200}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
