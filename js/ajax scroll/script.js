let preloader = document.querySelector("#preloader");

const showPreloader = () => {
	preloader.style.display = "block";
};
const hidePreloader = () => {
	preloader.style.display = "none";
};

const getData = () => {
	fetch("https://akademia108.pl/api/ajax/get-users.php")
		.then((response) => response.json())
		.then((data) => {
			// let pId = document.createElement("p");
			// let name = document.createElement("p");
			// let website = document.createElement("p");
			// let hr = document.createElement("hr");

			// pId.innerText = `Post ID: ${data.id}`;
			// name.innerText = `User ID: ${data.name}`;
			// website.innerText = `User URL: ${data.website}`;

			// document.body.appendChild(pId);
			// document.body.appendChild(name);
			// document.body.appendChild(website);
			// document.body.appendChild(hr);
			for (user of data) {
				let pId = document.createElement("p");
				let name = document.createElement("p");
				let website = document.createElement("p");
				let hr = document.createElement("hr");

				pId.innerText = `Post ID: ${user.id}`;
				name.innerText = `User ID: ${user.name}`;
				website.innerText = `User URL: ${user.website}`;
				document.body.appendChild(pId);
				document.body.appendChild(name);
				document.body.appendChild(website);
				document.body.appendChild(hr);
			}
			hidePreloader();
		});
};

const scrollToEndOfPage = () => {
	const scrollHight = document.documentElement.scrollHeight;
	const scrollTop = document.documentElement.scrollTop;
	const clientHight = document.documentElement.clientHeight;

	if (scrollTop + clientHight >= scrollHight - 2) {
		showPreloader();

		getData();
	}
};

window.addEventListener("scroll", scrollToEndOfPage);
