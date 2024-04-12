// import messages from "../src/messages/en-US";
let dateFormatter = null;
let dictionary = null;

function initI18n(messages) {
	dictionary = messages;
	const html = document.querySelector("html");
	html.setAttribute("lang", dictionary.locale.split("-")[0]);

	const title = document.querySelector("title");
	title.innerText = dictionary.rcDocumentTitle;

	dateFormatter = new Intl.DateTimeFormat(dictionary.locale);
}

function msg(key) {
	//smg = message
	return dictionary[key];
}

function fmtDt(date) {
	//console.log(date);
	// return date;
	return dateFormatter.format(date);
}

function fmtNb(num) {
	return num.toLocaleString("en-US");
}

export { initI18n, msg, fmtDt, fmtNb };
