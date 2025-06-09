fetch('assets/data/data.json')
    .then(response => response.json())
    .then(data => {

        // ==================== SKILLS ==================== //
        const skills = data.skills;
        const skillsContainer = document.getElementById('skills-section');
        if (!skills || skills.length === 0) {
            skillsContainer.style.display = "none";
        } else {
            let html = "";

            skills.forEach((skill) => {
                html += `
                    <div class="card-skills">
                        <h3>${skill.label}</h3>
                        <p>${skill.level}<span class="percent">${skill.percent}%</span></p></p>
                        <div class="bar-skills">
                            <span style="width: ${skill.percent}%; background-color: ${skill.color};"></span>
                        </div>
                    </div>
                `;
                
            });
            skillsContainer.innerHTML = html;
        }


        // ==================== PROJECTS ==================== //
        const projects = data.projects;
        const projectsContainer = document.getElementById('projects-section');
        const noProject = document.getElementById('no-project'); 

        if (!projects || projects.length === 0) {
            noProject.classList.toggle('hide');
        } else { 
            let html = "";

            projects.forEach((project) => {
                
                if (project.favorite == true) {
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
                };
            });

            projectsContainer.innerHTML = html;
        };
    });
