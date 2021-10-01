console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted.')
}

function duckTalk(event){
    alert('You look quite ravishing today.')
}

let duck = document.querySelector('img')

duck.addEventListener('mouseover', duckTalk)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);