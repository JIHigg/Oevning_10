const btnSW = document.getElementById('btn1');
const swItem = document.getElementById('charName');
const swOutput = document.getElementById('output');
const btnCrd = document.getElementById('cardBtn');
const deck = document.querySelector("#cardDeck");


function getApi  () {
    
    var swInput = swItem.value.replace(' ','+');
    console.log(swInput);
    
    
    fetch('https://www.swapi.tech/api/people?name='+swInput, {
        method: 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        
        data = data.result;
        
        swOutput.innerText = "";
        data.forEach(s => {
            console.log(s);
            s = s.properties;
            console.log(s);
            swOutput.innerText += `Name: ${s.name} \nHair/Eye Color: ${s.hair_color}/${s.eye_color}\n Birthyear: ${s.birth_year} `;
        });
    })
    
    .catch(error => {
        console.log('Error' + error);
        alert('Error: Something went wrong: ' + error);
    })
}
    

if(btnSW != null){
btnSW.addEventListener('click', getApi);
}

function getCard () {
    console.log(deck);
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1', {
        method : 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        deck.innerHTML = '';

        /* data.foreach(card =>{ */
            
            deck.innerHTML +=
            `
            <div class="card">
            <div class="card-header text-right">${data.cards[0].code}</div>
            <img src="${data.cards[0].image}" class="card-img">
            <div class="card-footer">${data.cards[0].code}</div>
            </div>
            `
       /*  }) */
        
    })
    .catch(error => {
        console.log("ERROR: " + error);
        alert(error);
    })
}   

if(btnCrd != null){
    btnCrd.addEventListener('click', getCard);
}
