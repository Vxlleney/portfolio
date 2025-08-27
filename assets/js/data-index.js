fetch('assets/data/skills.json')
    .then(response => response.json())
    .then(data => {

        // ==================== SKILLS ==================== //
        const skills = data.skills;
        const skillsContainer = document.getElementById('skills-section');
        const noSkill = document.getElementById('no-skill');

        if (!skills || skills.length === 0) {
            noSkill.classList.toggle('hide');
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
    });


fetch('assets/data/experiences.json')
    .then(response => response.json())
    .then(data => {

        const experiences = data.experiences;
        const expContainer = document.getElementById('exp-section');
        const noExp = document.getElementById('no-exp');

        if (!experiences || experiences.length === 0) {
            noExp.classList.toggle('hide');
        } else {
            let html = "";
            let count = 0;

            experiences.forEach((exp) => {
                count++

                if (count%2 != 0) {
                    html += `
                        <div class="content-exp-data">
                            <div class="exp-data">
                                <h2>${exp.company}</h2>
                                <p>${exp.job}</p>
                                <span><i class="uil uil-clock"></i>${exp.seniority}</span>
                                <button class="btn-view-missions">Voir les missions</button>
                            </div>
                            <div class="line-data"></div>
                        <div class="exp-data"></div>

                        </div>
                    `;
                } else {
                    html += `
                        <div class="content-exp-data">
                            <div class="exp-data"></div>
                            <div class="line-data"></div>
                            <div class="exp-data">
                                <h2>${exp.company}</h2>
                                <p>${exp.job}</p>
                                <span><i class="uil uil-clock"></i>${exp.seniority}</span>
                                <button class="btn-view-missions">Voir les missions</button>
                            </div>

                        

                        </div>
                    `;
                };
            });

            expContainer.innerHTML = html;
        }
    });


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
    })