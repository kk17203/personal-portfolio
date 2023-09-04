import headerImg from "./headerImg";
import { projectData } from "./projectData";
import renderProjects from "./projectRender";

console.log(projectData[0].description);
console.log(projectData[0].alt);

renderProjects(projectData.length);
