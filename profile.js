function favColor(event){
    alert('My favorite color is orange.')
}

function favPlace(event){
    alert(`My favorite place is my family's house in Vero Beach, Florida.`)
}

function favRitual(event){
    alert('My morning cup of coffee.')
}

function mallomars(event){
    document.getElementById('mallomars').classList.remove('hide')
    setTimeout(() => {
        document.getElementById('mallomars').classList.add('hide')
   }, 2000);

}

document.getElementById('color').addEventListener('click', favColor)
document.getElementById('place').addEventListener('click', favPlace)
document.getElementById('ritual').addEventListener('click', favRitual)
document.getElementById('mallo-btn').addEventListener('click', mallomars)
