document.addEventListener ("DOMContentLoaded", () => {

let resultat = beregnForhold(4,3);
console.log(resultat);



let resultat2 = beregnForhold2(4,0);
console.log(resultat2);

function beregnForhold(a,b) {

	return a/b;

	// console.log(resultat);

};



function beregnForhold2(a,b) {

	if (b==0) {
		return null;
	}
	else {
		return a/b;
	};
	
	console.log(beregnForhold2());
	
	};

});


