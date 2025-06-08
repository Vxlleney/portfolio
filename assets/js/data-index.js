fetch('assets/data/data.json')
    .then(response => response.json())
    .then(data => {

        // ==================== SKILLS ==================== //
        const skills = data.skills;
        const skillsContainer = document.getElementById('skills-section');
        console.log(skillsContainer);
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
                            <span class="${skill.color}" style="width: ${skill.percent}%;"></span>
                        </div>
                    </div>
                `;
                
            });
            skillsContainer.innerHTML = html;
        }

    });
