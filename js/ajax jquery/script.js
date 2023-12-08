$(document).ready(function () {
	$(".btn")
		.click(function () {
			$.get("https://akademia108.pl/api/ajax/get-post.php").done(function (
				data
			) {
				console.log(data);
				let pId = $("<p></p>").text(`Post ID: ${data.id}`);
				let userId = $("<p></p>").text(`Post ID: ${`User ID: ${data.userId}`}`);
				let title = $("<p></p>").text(`Post ID: ${data.title}`);
				let body = $("<p></p>").text(`Post ID: ${data.body}`);
				let hr = $("<hr>");
				let jqbody = $("body");

				jqbody.append(pId);
				jqbody.append(userId);
				jqbody.append(title);
				jqbody.append(body);
				jqbody.append(hr);
			});
		})
		.fail(function (error) {
			console.error(error);
		});
});
