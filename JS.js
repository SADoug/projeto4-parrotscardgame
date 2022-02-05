const cartas = [ 'unicornparrot','unicornparrot','tripletsparrot','tripletsparrot','revertitparrot','revertitparrot','metalparrot','metalparrot', 'fiestaparrot', 'fiestaparrot', 'explodyparrot','explodyparrot', 'bobrossparrot', 'bobrossparrot']
let primeiraCarta
let segundaCarta
let contador // número de jogadas
let lock // caso True o usuário não poderá selecionar cartas
let tempo 
let relogio
let myTimer

function pairCheck () {
    let numbersofcards = parseInt(prompt("Quantas cartas voçê deseja de 4 a 14?"));
    while (numbersofcards%2 !== 0 || numbersofcards < 4 || numbersofcards > 14){
        numbersofcards = parseInt(prompt("Quantas cartas voçê deseja de 4 a 14?"));

        let deck = cartas.slice(0,numbersofcards); // Cria-se a partir das cartas disponíveis um array com o número de cartas escolhido pelo usuário 
        deck.sort(() => Math.random() - 0.5); // Após esta linha, a minhaArray estará embaralhada
        console.log(deck)
        let conteudo=''
        for (let i=0;i<deck.length;i++){
            conteudo+=`<div data-identifier="card" class="carta" onclick="">
            <div data-identifier=ront-face" class="cartaFrente"><img src="front.png"></div>
            <div data-identifier="back-face" class="cartaTras"><img src="front.png"></div>
            </div>`
        }
        document.querySelector("main").innerHTML=conteudo; // Mostra as cartas ja embaralhadas no arquivo HTML
        primeiraCarta=null;
        segundaCarta=null;
        contador = 0;
        lock=false;
        tempo=0;
    
        document.querySelector("header").innerHTML="<h1>PARROT CARD GAME</h1><p>0</p>" // Mostra o cabeçalho no HTML
        
       myTimer = setInterval(() => {
            // Cria um cronômetro na tela e atualiza a cada 1 segundo
            tempo++
            relogio = document.querySelector("header p");
            relogio.innerHTML = tempo
        }, 1000);
    }
}  
     
pairCheck();
/*

function addCards(){
    const cardList = [];
    pairCheck();
    for(let count = o; count < checkedNumber; count = count + 1) {
        const cardscontainer = document.querySelector('Container-Cards')
        cardscontainer.innerHTML += 
    }
}

/*
function pairCheck (){
if (numbersofcards%2 === 0 || numbersofcards > 3 || numbersofcards < 15) {
   let checkedNumber = numbersofcards;
    return checkedNumber;
    alert ("working")
} else {
   return numbersofcards = prompt("Quantas cartas voçê deseja de 4 a 14?");
   alert("hmm")
}
}
pairCheck ();





/*
function addCards(){
    const cardList = [];
    pairCheck();
    for(let count = o; count < checkedNumber; count = count + 1) {
        const cardscontainer = document.querySelector('Container-Cards')
        cardscontainer.innerHTML += `
    }
}

let cont = 0 //4 é o minimo de entrada
while (cont <= checkedNumber ) {
    const cardadd = document.querySelector("Container-Cards"); //put inside the WHILE the act to add a card to the respective Div
                                       //every card have two sides remember to create the card that two sides
                                       // const tare
}   */





