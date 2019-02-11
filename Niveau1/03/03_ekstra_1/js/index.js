document.addEventListener ("DOMContentLoaded", () => {

	skjulElement(".afsnit");
	skjulElement(".knap");
	skjulElement(".firkant");
	
	function skjulElement(objekt) {
	
	let element = document.querySelector(objekt);
	
	if(element !== null) {
	element.style.display="none";
	}

	};


// skjulElement(".afsnit");

// skjulElement(".knap");

// skjulElement(".firkant");

// skjulElement(".knao");

// function skjulElement (cssSelector) {

// 	let element = document.querySelector(cssSelector);
	
// 	if(element !== null) {
// 	element.style.display="none";
// 	}

// };



});