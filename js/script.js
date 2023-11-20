let name = "Akademia 108";

function odwrocString(str) {
	return str.split("").reverse().join("");
}

let odwrocony = odwrocString(name);
console.log(odwrocony);
