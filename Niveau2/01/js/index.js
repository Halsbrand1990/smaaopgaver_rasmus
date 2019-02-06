document.addEventListener("DOMContentLoaded", (event) => {

	let btnElements = document.querySelectorAll("#buttons button");

	//console.log(btnElements);

	btnElements.forEach((btnElement) => {

		btnElement.addEventListener("click", () => {

			btnElements.forEach((btnElement) => {

				btnElement.style.backgroundColor = "#eee";

			});
			
			btnElement.style.backgroundColor ="#33FFAA"

		});

	});

});