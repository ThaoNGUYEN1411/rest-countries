async function getJson(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

async function postJson(url, data) {
	try {
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"content-type": "application/json; charset=UTF-8",
			},
		});
		// const response = await request.json();

		// const response = await request;
		//console.log(response);
		//console.log(response.status);
		return response;
	} catch (error) {
		console.log(error);
		console.log("quand tu affiche?");
	}
}
export { getJson, postJson };
