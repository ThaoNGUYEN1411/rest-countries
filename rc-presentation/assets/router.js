let target = null;
const registry = new Map();
//Map(caste, correspondance)
// Entry[Key,value];
/*
new Map() crée une nouvelle instance de la classe Map en JavaScript, qui est une structure de données permettant de stocker des paires clé-valeur.
*/

function initRouter(routes) {
	target = document.querySelector(routes.target); // #root
	const mappings = routes.mappings; //array of object
	for (let i = 0; i < mappings.length; i++) {
		const mapping = mappings[i]; //{name: '', component: ''}
		// console.log(mapping);
		const name = "rc-" + mapping.component.toLowerCase();
		const element = `<${name}></${name}>`;
		registry.set(mapping.name, element);
	}
	console.log(registry);
	window.addEventListener("hashchange", (event) => {
		//HomeComponent => rc-homecomponent
		//window.location.hash => #/home, #/contact, #/table
		const hash = window.location.hash;
		const name = hash.split("#/")[1];
		console.log(name);
		const element = registry.get(name);
		target.innerHTML = element;
		console.log(element);
		// console.log(window.location.hash);
		// console.log("hash changed");
	});
}

export default initRouter;
