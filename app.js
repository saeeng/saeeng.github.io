import { resume } from "./data/resume.js";

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
};

setText("name", resume.name);
setText("headline", resume.headline);
setText("introText", resume.intro);
setText("updatedAt", `Last updated: ${new Date().toISOString().slice(0, 10)}`);

const experienceList = document.getElementById("experienceList");
resume.experiences.forEach((exp) => {
  const article = document.createElement("article");
  article.className = "item";
  article.innerHTML = `
    <h3>${exp.company} · ${exp.role}</h3>
    <p class="meta">${exp.period}</p>
    <ul>${exp.summary.map((s) => `<li>${s}</li>`).join("")}</ul>
    <p class="meta">Projects: ${exp.projects.join(", ")}</p>
  `;
  experienceList?.append(article);
});

const skillGroups = document.getElementById("skillGroups");
Object.entries(resume.skills).forEach(([category, items]) => {
  const block = document.createElement("section");
  block.className = "item";
  block.innerHTML = `
    <h3>${category}</h3>
    <div class="skill-tags">
      ${items.map((item) => `<span class="tag">${item}</span>`).join("")}
    </div>
  `;
  skillGroups?.append(block);
});

const projectList = document.getElementById("projectList");
resume.projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank" rel="noreferrer">프로젝트 보기</a>
  `;
  projectList?.append(article);
});
