import { projectData } from "./projectData";

function renderProjects() {
    for (let i = 0; i < projectData.length; i++) {
        const project = projectData[i];
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.setAttribute("data-index", i);
        projectCard.innerHTML = `
        <div class="project-img">
            <img src="${project.img}" alt="${project.alt}">
        </div>
        <div class="project-info">
            <h2 class="project-name">${project.name}</h2>
            <p class="project-tech-stack">${project.techStack}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                <a href="${project.live}" target="_blank" rel="noopener noreferrer">Live</a>
                <a href="${project.code}" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
        </div>
        `;
        document.querySelector(".projects").appendChild(projectCard);
    }
}

export default renderProjects;
