const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
	fetch(
		"https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"
	)
		.then((response) => response.json())
		.then((data) => {
			for (let key of Object.keys(data)) {
				let p = document.createElement("p");
				p.innerHTML = key + ": " + data[key];
				div.appendChild(p);
			}
		});
});

let div = document.createElement("div");
div.setAttribute("id", "dane-programisty");
btn.after(div);
