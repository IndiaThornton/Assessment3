function kpic(evt) {
	evt.preventDefault();
	
	alert('You are great');
}

let  kittypic = document.querySelector(`#kittypic`);

kittypic.addEventListener('mouseover', kpic);