let randomLink = document.getElementById('eatery-link')


const thirstyLion = 'https://www.thirstyliongastropub.com/'
const barLouie = 'https://www.barlouie.com/'
const blaze = 'https://blazebraziliansteakhouse.com/'


const foodArr = [thirstyLion, barLouie, blaze ]
const foodNameArr = ['Thirsty Lion', 'Bar Louie', 'Blaze Brazilian Steakhouse' ]
function randomEatery(){

    let newLink = document.createElement('a') 
     
    let random = Math.floor(Math.random() * (3 - 0) + 0)
    newLink.href = foodArr[random]
    newLink.textContent = foodNameArr[random]

    randomLink.appendChild(newLink)
    
    setTimeout(() => {
        randomLink.removeChild(newLink)
   }, 5000);
}

document.getElementById('eatery').addEventListener('click', randomEatery)
