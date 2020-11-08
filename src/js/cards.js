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
}();
