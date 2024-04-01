const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.add('disable')
        })
        target.classList.remove('disable')

        tabs.forEach(t =>{
            t.classList.remove('active-button')
        })
        tab.classList.add('active-button')
    })
})

function submitForm() {
    gameData = {Name: document.getElementById('name').value, 
                Desc: document.getElementById('desc').value,
                Image: document.getElementById('image-link').value,
                Genus: document.getElementById('Genus').value,
                Mode: document.getElementById('mode').value,
                Trophy: document.getElementById('trophy').value,
                Plataform: document.getElementById('plataform').value}

    var storedData = localStorage.getItem("gameData");
    var gamesArray = storedData ? JSON.parse(storedData) : [];
    gamesArray.push(gameData);
    localStorage.setItem("gameData", JSON.stringify(gamesArray));

    alert("O jogo foi registrado!");
    document.getElementById('game-form').reset();
}