export default class BaseComponent extends HTMLElement {
	data = {}; //instante un object vide

	constructor() {
		super();
	}

	async connectedCallback() {
		await this.beforeRender();
		this.render();
	}

	async beforeRender() {
		return;
	}

	render() {
		const content = this.template();
		this.innerHTML = content;
	}

	template() {
		return "";
	}
}
