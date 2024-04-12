import BaseComponent from "./BaseComponent.js";

export default class BaseFormComponent extends BaseComponent {
	constructor() {
		super();
	}

	async connectedCallback() {
		await super.connectedCallback();
		const form = this.querySelector("form");
		form.addEventListener("submit", (event) => {
			event.preventDefault();

			//read from (inputs) => bond de data
			const formData = new FormData(form);
			console.log("formData :", formData);
			// const object = {};
			formData.forEach((value, key) => {
				this.data[key] = value.trim();
			});

			console.log(this.data);
			const valid = this.validate();
			if (valid) {
				console.log("Form is valid");
				this.submit();
				// this.form.reset();
			} else {
				console.log("Form is not valid");
				this.onValidationErrors();
			}
			//preventDefault
			// console.log("Form is submitted");
		});
	}

	async submit() {
		//recupérer tous les inputs
		//formdata
		//json
		//post json to api
		//handle server
	}

	validate() {
		return true;
	}

	onValidationErrors() {
		return;
	}
}
