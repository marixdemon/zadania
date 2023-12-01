const form = document.getElementById("form");
const allAgreeChx = document.querySelector('[name="allAgree"]');
const agree1 = document.querySelector('[name="agree1"]');

const validate = (event) => {
	let name = document.querySelector('[name="name"]');
	let email = document.querySelector('[name="email"]');
	let errors = document.querySelector(".errors");

	errors.innerText = "";

	if (name.value.trim() === "") {
		let liError = document.createElement("li");
		liError.innerText = "Wpisz imię i nazwisko";
		errors.appendChild(liError);
	}
	if (!email.value.includes("@")) {
		let liError = document.createElement("li");
		liError.innerText = "Wpisz email";
		errors.appendChild(liError);
	}
	if (!agree1.checked) {
		let liError = document.createElement("li");
		liError.innerText = "Nie wyraziłeś zgody 1";
		errors.appendChild(liError);
	}

	if (errors.children.length > 0) {
		event.preventDefault();
	}
};

const allAgree = (event) => {
	const agree2 = document.querySelector('[name="agree2"]');

	agree1.checked = event.target.checked;
	agree2.checked = event.target.checked;

	agree1.disabled = event.target.checked;
	agree2.disabled = event.target.checked;
};

form.addEventListener("submit", validate);
allAgreeChx.addEventListener("change", allAgree);
