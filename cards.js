//https://api.github.com

// Richiesta via GET alle api di github

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      listRepo = JSON.parse(this.responseText);    
    }
};
  
xmlhttp.open("GET", "http://api.github.com/users/massimilianobaldo/repos", false);
xmlhttp.send();


// Creazione delle card
for (let i = 0; i < listRepo.length; i++) {
    var repo = listRepo[i];
    // Creazione dei tag html
    var card = document.createElement("div");
    var title = document.createElement("h3");
    var lineBreak = document.createElement("hr");
    var description = document.createElement("p");
    var link = document.createElement("a");
    // Assegnazione dei valori valori ai tag
    link.innerHTML = repo['name'];
    link.setAttribute("href", repo['clone_url']);
    link.setAttribute("class", "links");
    description.innerHTML = repo['description'];
    description.setAttribute("class", "description");
    // Inserimento dei vari elementi nella gerarchia HTML
    title.appendChild(link);
    card.appendChild(title);
    card.appendChild(lineBreak);
    card.appendChild(description);
    // Assegnazione della classe "card" per lo stile 
    card.setAttribute("class", "card");
    document.getElementById("list-cards").appendChild(card);
}


/*
var card = document.createElement("div");
    document.body.appendChild(card);
    var title = document.createElement("h3");
    title.innerHTML = repo['name'];
    document.getElementsByName("h3");*/
