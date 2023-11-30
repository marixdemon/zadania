const p1 = document.querySelector("p.first");
const p2 = document.querySelector("p.second");
const btn = document.querySelector("button");

const setBackground = () => {
	p1.style.backgroundColor = "red";
	p2.style.backgroundColor = "yellow";
};

btn.addEventListener("click", setBackground);
