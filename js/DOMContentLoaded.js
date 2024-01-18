function l_r(bool){
    return bool ? 'right' : 'left';
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('res/jsons/projects.json')
        .then(response => response.json())
        .then(projects => {
            let even = true;
            const container = document.getElementById('projects-container');
            projects.forEach(project => {

                const projectDiv = document.createElement('div');
                projectDiv.className = 'div_projects';

                let languagesHtml = '';
                if (project.lang && project.lang.length) {
                    project.lang.forEach(language => {
                        languagesHtml += `<div class="div_lang"><p class="txt p_txt_spe">${language}</p></div>`;
                    });
                }

                projectDiv.innerHTML = `
                <div class="title pos_${l_r(!even)} ">
                    <p class="txt p_txt title_project" >${project.name}</p>
                </div>
                <div class="content content_${l_r(!even)} ">
                    <span class="txt p_txt span_corner span_${l_r(even)} txt_blue">${project.type} - ${project.date}</span>
                    <p class="txt p_txt_desc p_desc">
                    ${project.desc}
                    </p>
                    <div class="content_lang span_${l_r(even)} ">
                    ${languagesHtml}
                    </div>

                    <a href="https://github.com/Sala2Code/${project.name}" target="_blank">
                        <div class="link_github isMobile">
                            <img src="res/svg/github.svg" alt="github" class="img_github">
                        </div>
                    </a>

                </div>
                <div class="image pos_${l_r(even)} ">
                    <img class="img_project" src="res/projects/${project.img}" />
                </div>
                <a href="https://github.com/Sala2Code/${project.name}" target="_blank">
                    <div class="link_github github_${l_r(!even)}  isComputer">
                        <img src="res/svg/github.svg" alt="github" class="img_github">
                    </div>
                </a>
                `;

                container.appendChild(projectDiv);
                even = !even;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });


    var observerTarget = document.getElementById('projects');
    var slide_down = document.getElementById('slide_down');
    var slide_up = document.getElementById('slide_up');

    
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting) {
            slide_down.style.opacity = '1'; 
            slide_up.style.opacity = '1'; 
            slide_down.style.visibility='visible';
            slide_up.style.visibility='visible';
        } else {
            slide_down.style.opacity = '0'; 
            slide_up.style.opacity = '0'; 
            slide_down.style.visibility='hidden';
            slide_up.style.visibility='hidden';
            
            if(window.scrollY > 2.5*window.innerHeight ){
                var targetElement = document.getElementById('skills');
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }else if(window.scrollY > .5*window.innerHeight) {
                var targetElement = document.getElementById('aboutMe');
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

        }
    }, { threshold:.1 });
    
    observer.observe(observerTarget);
});

function gotoSection(sectionId) {

    window.location.hash = sectionId;
  }
