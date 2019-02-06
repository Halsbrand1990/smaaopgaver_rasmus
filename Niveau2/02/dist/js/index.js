document.addEventListener ("DOMContentLoaded", () => {
	
	let counterAmount=[1,1,1];
	let countMin=0;
	let countMax=2000;
	let btninElements = document.querySelectorAll(".increase");
	let btndeElements = document.querySelectorAll(".decrease");
	let amountElements = document.querySelectorAll(".antal")

	console.log(counterAmount);

	btninElements.forEach((btninElement, index) => {

		btninElement.addEventListener("click", () => {
	
			counterAmount[index]++;
			restrictCount(index);
			updateCount(index);
			
		});

	});

	btndeElements.forEach((btndeElement, index) => {

		btndeElement.addEventListener("click", () => {
	
			counterAmount[index]--;
			restrictCount(index);
			updateCount(index);
			
		});

	});

	amountElements.forEach((amountElement, index) => {

updateCount(index);

	});
	
	function updateCount(index) {

		amountElements[index].innerHTML=counterAmount[index];
	}

	function restrictCount(index) {

		if (counterAmount[index] < countMin) {
		counterAmount[index]=countMin;
		}
		else				
		if (counterAmount[index] > countMax) {
		counterAmount[index]=countMax;
		}
		
	}

});