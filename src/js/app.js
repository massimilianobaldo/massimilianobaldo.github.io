const swup = new Swup({
  cache: true,
  animateHistoryBrowsing: true
});

// particlesJS.load(@dom-id, @path-json, @callback (optional));
particlesJS.load('particles-js', '/src/js/particles-conf.json', function() {
    console.log('callback - particles.js config loaded');
});

// Function for generate the cards of the projects
let repos = async function () {
  let fetchCall = await fetch("https://api.github.com/users/massimilianobaldo/repos");
  let result = await fetchCall.json();
  let initailTemplate = "";
  for (let i = 0; i < result.length; i++) {
    const template = `
    <div class="project-card">
      <h4><a href="${result[i].html_url}"> ${(result[i].name).replace(/-/g,' ')} </a></h4>
      <p class="project-description">${result[i].description}</p>
      <p class="project-language">${(result[i].language == null ? "" : result[i].language)}</p>
    </div>`;
    initailTemplate += template;
  }
  document.getElementById('projects').innerHTML = initailTemplate;
};

// This function controls if there is the div di="projects", so then calls "repos"
function clickOnLink () { 
  if (document.getElementById('projects')) {
       repos();
  }
};

clickOnLink();

// Listener for re-load the repos js
swup.on('contentReplaced', clickOnLink);
