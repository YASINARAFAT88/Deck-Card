const main = document.getElementById('main')

const searchButton = () =>{
    const input = document.getElementById('input-value')
    const error = document.getElementById('error')
    let inputValue = parseInt(input.value);
    if(isNaN(inputValue) || inputValue==''){
        error.innerText="please put your hand On your Ass"
        inputValue='';
        main.innerHTML="";
    }else if(inputValue <= 0){
        error.innerText="please put your two hand On your Ass"
        inputValue='';
        main.innerHTML="";
    }else{
        main.innerHTML="";
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardDisplay(data.cards))
        input.value='';
        error.innerText="";
    }
}
const cardDisplay = (cards) =>{
    for(const card of cards){
        console.log(card)
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${card.image}">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${card.code}</p>
                <a href="#" onclick="cardDetail('${card.code}')" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        `
        main.appendChild(div)
    }
}
const cardDetail = (code) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data => {
            const allCard = data.cards
            const singleCards = allCard.find(card => card.code === code)
            console.log(singleCards)
            const div = document.createElement('div')
            main.innerHTML="";
            div.innerHTML=`
            <div class="card" style="width: 18rem;">
            <img src="${singleCards.image}">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${singleCards.code}</p>
                
            </div>
            </div>
            `
            main.appendChild(div)
        })
}