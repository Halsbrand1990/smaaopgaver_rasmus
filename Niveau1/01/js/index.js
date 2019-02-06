document.addEventListener ("DOMContentLoaded", (event) => {

	let btnElement = document.querySelector("#my-button");

	let btnState = 0;

	btnElement.addEventListener("click", () => {

	console.log ("Knap trykket");

		if (btnState==0) {
			btnState=1;
			btnElement.style.backgroundColor = "#7f7";
		}
		else {
			btnState=0;
			btnElement.style.backgroundColor = "#eee";
		}

});

});
