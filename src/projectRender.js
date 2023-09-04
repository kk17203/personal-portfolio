import { projectData } from "./projectData";

function renderProjects(num) {
    const projects = document.querySelector(".projects");

    for (let i = 0; i < num; i++) {
        const project = projectData[i];

        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.setAttribute("data-index", i);
        projects.appendChild(projectCard);

        let projectImg = document.createElement("div");
        projectImg.classList.add("project-img");
        projectCard.appendChild(projectImg);

        let image = document.createElement("img");
        image.src = project.img;
        image.alt = project.alt;
        projectImg.appendChild(image);

        let projectInfo = document.createElement("div");
        projectInfo.classList.add("project-info");
        projectCard.appendChild(projectInfo);

        let projectName = document.createElement("h2");
        projectName.classList.add("project-name");
        projectName.textContent = project.name;
        projectInfo.appendChild(projectName);

        let projectTechStack = document.createElement("p");
        projectTechStack.classList.add("project-tech-stack");
        projectTechStack.innerHTML = `<span>Tech Stack: </span>${project.techStack}`;
        projectInfo.appendChild(projectTechStack);

        let projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.textContent = project.description;
        projectInfo.appendChild(projectDescription);

        let projectLinks = document.createElement("div");
        projectLinks.classList.add("project-links");
        projectInfo.appendChild(projectLinks);

        let liveLink = document.createElement("a");
        liveLink.href = project.live;
        liveLink.target = "_blank";
        liveLink.rel = "noopener noreferrer";
        liveLink.textContent = "Live";
        projectLinks.appendChild(liveLink);

        let codeLink = document.createElement("a");
        codeLink.href = project.code;
        codeLink.target = "_blank";
        codeLink.rel = "noopener noreferrer";
        codeLink.textContent = "Code";
        projectLinks.appendChild(codeLink);
    }
}

export default renderProjects;
