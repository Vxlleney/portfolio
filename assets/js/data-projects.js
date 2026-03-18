fetch('assets/data/projects.json')
    .then(response => response.json())
    .then(data => {

        // ==================== PROJECTS ==================== //
        const projects = data.projects;
        const projectsContainer = document.getElementById('projects-section');
        const noProject = document.getElementById('no-project');

        if (!projects || projects.length === 0) {
            noProject.classList.toggle('hide');
        } else {
            let html = "";

            

            projects.forEach((project) => {
                const toolsHtml = project.tools ? project.tools.map(tool => `<li>${tool}</li>`).join('') : '<li>Non renseigné</li>';
                html += `
                     <div class="card-project">
                            <div class="line-top-right"></div>
                            <div class="line-bottom-left"></div>
                            <div class="top-card-project">
                                <div class="icon">
                                    <i class="uil uil-brackets-curly"></i>
                                </div>

                                <ul class="tools-projects">
                                    ${toolsHtml}
                                </ul>
                            </div>

                            <div class="bottom-card-project">
                                <div class="title-card-project">
                                    <h2>${project.name}</h2>
                                    <p>${project.description}</p>
                                </div>

                                <a href="${project.link}" class="btn-card-project">
                                    <span>Accéder au projet</span>
                                    <i class="uil uil-angle-right"></i>
                                </a>
                            </div>
                        </div>
                `;
            });

            projectsContainer.innerHTML = html;
        }
    });
