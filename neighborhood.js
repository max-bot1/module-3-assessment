let randomLink = document.getElementById('link')


const thirstyLion = 'https://www.thirstyliongastropub.com/'
const barLouie = 'https://www.barlouie.com/'
const blaze = 'https://blazebraziliansteakhouse.com/'


const foodArr = [thirstyLion, barLouie, blaze ]
const foodNameArr = ['Thirsty Lion', 'Bar Louie', 'Blaze Brazilian Steakhouse' ]

function randomEatery(){
    randomLink.classList.remove('hide')

    let random = Math.floor(Math.random() * (3 - 0) + 0)
    randomLink.href = foodArr[random]
    randomLink.textContent = foodNameArr[random]
}

document.getElementById('eatery').addEventListener('click', randomEatery)
