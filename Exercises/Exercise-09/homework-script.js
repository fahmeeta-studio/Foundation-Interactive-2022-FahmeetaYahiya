




let small = document.querySelector('div.small');
let large = document.querySelector('div.large');
let medium = document.querySelector('div.medium');


function toogleClass(){

	let myBody = document.querySelector('body');

	if (medium.className === 'medium'){
		medium.className = 'small';
	}else if(medium.className === 'small'){
		medium.className ="large";
	}else if(medium.className ==="large"){
		medium.className = 'medium';
	}

    if (small.className === 'small'){
		small.className = 'large';
	}else if(small.className === 'large'){
		small.className ="medium";
	}else if(small.className ==="medium"){
		small.className = 'small';
	}

    if (large.className === 'large'){
		large.className = 'medium';
	}else if(large.className === 'medium'){
		large.className ="small";
	}else if(large.className ==="small"){
		large.className = 'large';
	}
}

small.addEventListener('click', toogleClass);
large.addEventListener('click', toogleClass);
medium.addEventListener('click', toogleClass);