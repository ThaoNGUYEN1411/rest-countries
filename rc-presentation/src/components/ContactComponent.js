import BaseFormComponent from "../../assets/BaseFormComponent.js";
import { postJson } from "../../assets/api.js";
// import { getJson } from "../../assets/api.js";
import { msg } from "../../assets/i18n.js";
export default class ContactComponent extends BaseFormComponent {
	constructor() {
		super();
	}

	onValidationErrors() {
		window.alert(`${msg("rcContactMessageAlert")}`);
	}

	validate() {
		let validated = true;
		const emailRegExp =
			/^(?=.{1,256}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const firstname = this.data.firstname;
		const lastname = this.data.lastname;
		const email = this.data.email;
		const comments = this.data.comments;

		if (firstname.length === 0 || firstname.length > 100) {
			validated = false;
		} else if (lastname.length === 0 || lastname.length > 100) {
			validated = false;
		} else if (email.length === 0 || !emailRegExp.test(email)) {
			validated = false;
		} else if (comments > 1000) {
			validated = false;
		}
		return validated;
	}

	async submit() {
		// const dataSend = this.data;
		const url = "http://localhost:8080/send-mail";
		const dataContact = this.data;
		postJson(url, dataContact);
		/*try {
			fetch(url, {
				method: "POST",
				body: JSON.stringify(this.data),
				headers: {
					"content-type": "application/json; charset=UTF-8",
				},
			});
		} catch (error) {
			console.log(error);
		}*/
		// console.log(this.data);
	}

	template() {
		return /*html*/ `
		<main class="container">
      		<h1 class="mt-3">${msg("rcContactTitle")}</h1>
			  <div class="row d-flex flex-lg-row flex-column-reverse">
			  <div class="col-lg-6 col-sm-12 text-center">
				<img
				  src="../../public/img-contact.jpg"
				  alt="" class="my-5 w-100 image-fluid rounded-5 shadow-lg">
			  </div>
			  <div class="col-lg-6 col-sm-12">
				<form class="my-lg-5 my-3 mx-lg-5 px-lg-3" novalidate>
				  <div class="mb-3">
				  
					<label for="firstname" class="form-label">${msg("rcContactFirstname")}<span class="text-danger">*</span></label>
					<input type="firstname" class="form-control" id="firstname" name="firstname">
					<div class="form-text">${msg("rcContactFirstnameHelp")}</div>
				  </div>

				  <div class="mb-3">
					<label for="lastname" class="form-label">${msg("rcContactLastname")}<span class="text-danger">*</span></label>
					<input type="lastname" class="form-control" id="lastname" name="lastname">
					<div class="form-text">${msg("rcContactLastnameHelp")}</div>
				  </div>
				  
				  <div class="mb-3">
					<label for="email" class="form-label">${msg("rcContactEmail")}<span class="text-danger">*</span></label>
					<input type="email" class="form-control" id="email" name="email">
					<div class="form-text">${msg("rcContactEmailHelp")}</div>

				  </div>
				  <div class="mb-3">
					<label for="comments" class="form-label">${msg("rcContactComments")}</label>
					<textarea type="password" class="form-control" rows="3" id="comments" name="comments"></textarea>
					<div class="form-text">${msg("rcContactCommentsHelp")}</div>
				  </div>
				  <div class="d-flex justify-content-end"><button type="submit"
					  class="btn btn-primary flex-lg-grow-0 flex-grow-1">${msg(
							"rcContactSubmit",
						)}</button></div>
				</form>
			  </div>
			</div>
			</div>
    	</main>
		`;
	}
}
