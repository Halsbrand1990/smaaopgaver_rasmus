document.addEventListener ("DOMContentLoaded", () => {
	
	let counterAmount=[0,0,0];
	let priceList = [10, 33, 60];
	let countMin=0;
	let countMax=2000;
	let btninElements = document.querySelectorAll(".increase");
	let btndeElements = document.querySelectorAll(".decrease");
	let amountElements = document.querySelectorAll(".antal");
	let totalElements = document.querySelectorAll(".total");
	let priceElements = document.querySelectorAll(".price");

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

		totalElements[index].innerHTML=priceList[index]*counterAmount[index]+"&nbsp;kr.";
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