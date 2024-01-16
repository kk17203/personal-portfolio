import { projectData } from "./projectData";

function renderProjects(num) {
    for (let i = 0; i < num; i++) {
        const project = projectData[i];
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.setAttribute("data-index", i);
        projectCard.innerHTML = `
        <div class="project-img-container">
        <a href="${project.live}" target="_blank" rel="noopener nofreferrer">
            <img src="${project.img}" alt="${project.alt}">
            </a>
        </div>
        <div class="project-info">
            <h2 class="project-name">${project.name}</h2>
            <p class="project-tech-stack"><span>Tech Stack: </span>${project.techStack}</p>
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
