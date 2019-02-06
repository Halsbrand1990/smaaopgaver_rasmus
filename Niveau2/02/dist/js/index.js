document.addEventListener ("DOMContentLoaded", () => {

	let listElements = document.querySelectorAll(".kasse");

	let count=0;
	let countMin=0;
	let countMax=2000;
	
	listElements.forEach ( (listElements) => {

	console.log(count);
	
	document.querySelector(".increase").addEventListener("click", () => {
	
	count++;
	restrictCount();
	updateCount();
	
	});
	
	document.querySelector(".decrease").addEventListener("click", () => {
	
	count--;
	restrictCount();
	updateCount();
	
	});
	
	function restrictCount() {
		if (count < countMin) {
			count=countMin;
		}
		else
		if (count > countMax) {
			count=countMax;
		}
	}
	
	function updateCount() {
	document.querySelector(".antal").innerHTML=count;
	}
	
});

});