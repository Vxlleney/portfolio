fetch('assets/data/data.json')
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

                html += `
                    <div class="card-project">
                        <div class="line-top-right"></div>
                        <div class="line-bottom-left"></div>
                        <div class="icon">
                            <i class="uil uil-brackets-curly"></i>
                        </div>

                        <h2>${project.name}</h2>
                        <p>${project.description}</p>

                        <a href="${project.link}" class="btn-card-project">
                            <span>Accéder au projet</span>
                            <i class="uil uil-angle-right"></i>
                        </a>
                    </div>
                `;
            });

            projectsContainer.innerHTML = html;
        }
    });
