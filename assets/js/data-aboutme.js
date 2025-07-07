fetch('assets/data/personal.json')
    .then(response => response.json())
    .then(data => {

        // ================= LANGUES ================= //
        const languages = data.languages;
        const languagesContainer = document.getElementById('languages-section');

        if (!languages || languages.length === 0) {
            languagesContainer.style.display = "none";
        } else {
            let html = "";

            languages.forEach((language, index) => {
                if (index > 0) {
                    html += `<div class="line-dropdown"></div>`;
                }

                html += `
                    <div class="item-dropdown">
                        <span class="years"></span>
                        <h5>${language.language}</h5>
                        <span class="mention">${language.level}</span>
                    </div>
                `;
            });

            languagesContainer.innerHTML = html;
        };

        // ================= degrees ================= //
        const degrees = data.degrees;
        const degreesContainer = document.getElementById('degrees-section');

        if (!degrees || degrees.length === 0) {
            degreesContainer.style.display = "none";
        } else {
            let html = "";

            degrees.forEach((degree, index) => {
                if (index > 0) {
                    html += `<div class="line-dropdown"></div>`;
                }

                html += `
                    <div class="item-dropdown">
                        <span class="years">${degree.years}</span>
                        <h5>${degree.label}</h5>
                        <span class="mention">${degree.mention}</span>
                    </div>
                `;
            });

            degreesContainer.innerHTML = html;
        };

        // ================= IDENTITY ================= //
        const identity = data.identity;
        const identityContainer = document.getElementById('identity-section');

        if (!identity || identity.length === 0) {

            let html =
                `
                <span>...</span>

                <ul>
                    <li>Âge :<span>...</span></li>
                    <li>Véhiculé :<span><i class="uil uil-cross" style="color: #e24444;"></i></span></li>
                    <li>Diplômes :<span>...</span></li>
                </ul>

                <a href="petitvalentin.fr"><button class="view-cv">
                    <i class="uil uil-download-alt"></i>
                    Télécharger CV
                </button></a>
                `;

            identityContainer.innerHTML += html;

        } else {
            let html = 
                `

                <span>${identity.job}</span>

                <ul>
                    <li>Âge :<span>${identity.age} ans</span></li>
                    <li>Véhiculé : <span><i class="uil ${identity.car ? 'uil-check-circle' : 'uil-minus-circle'}" style="color: ${identity.car ? '#57e465' : '#e52c2c'} !important;"></i></span></li>
                    <li>Diplômes :<span>${identity.countdegrees}</span></li>
                </ul>

                <a href="petitvalentin.fr"><button class="view-cv">
                    <i class="uil uil-download-alt"></i>
                    Télécharger CV
                </button></a>
                `;

            identityContainer.innerHTML += html;
        };

        
    });
