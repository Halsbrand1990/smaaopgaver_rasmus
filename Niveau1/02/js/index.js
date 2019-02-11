document.addEventListener ("DOMContentLoaded", () => {

	let resultat = beregnForhold(4,3);
	console.log(resultat);

	let resultat2 = beregnForhold2(4,0);
	console.log(resultat2);

	let resultat3 = beregnForhold2(4,5);
	console.log(resultat3);


	function beregnForhold(a,b) {

		return a/b;

	};


	function beregnForhold2(a,b) {

		if (b==0) {
			return null;
			}
		else {
			return a/b;
		};
	
	};

});


