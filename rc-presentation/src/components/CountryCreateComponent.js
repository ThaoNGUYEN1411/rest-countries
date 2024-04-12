import BaseFormComponent from "../../assets/BaseFormComponent.js";
import { postJson } from "../../assets/api.js";
// import { getJson } from "../../assets/api.js";
import { msg } from "../../assets/i18n.js";

export default class CountryCreateComponent extends BaseFormComponent {
	constructor() {
		super();
	}

	onValidationErrors() {
		window.alert(`${msg("rcCreateCountryMessageAlert")}`);
	}

	validate() {
		let validated = true;

		const isoCode = this.data.isoCode;
		const countryName = this.data.countryName;
		const countryPopulation = this.data.countryPopulation;
		const countryArea = this.data.countryArea;
		const capitalName = this.data.capitalName;
		const tld = this.data.tld;
		const flagUrl = this.data.flagUrl;
		const coatOfArmUrl = this.data.coatOfArmUrl;
		const googleMapsUrl = this.data.googleMapsUrl;

		if (countryName.length < 2 || countryName.length > 60) {
			//displayFieldError("countryName");
			validated = false;
		} else if (isoCode.length !== 2) {
			//displayFieldError("isoCode");
			validated = false;
		} else if (capitalName.length < 1 || capitalName.length > 100) {
			//displayFieldError("capitalName");
			validated = false;
		} else if (tld.length !== 3) {
			//displayFieldError("tld");
			validated = false;
		} else if (flagUrl.length < 1 || flagUrl.length > 40) {
			//displayFieldError("flagUrl");
			validated = false;
		} else if (coatOfArmUrl.length < 1 || coatOfArmUrl.length > 60) {
			//displayFieldError("coatOfArmUrl");
			validated = false;
		} else if (googleMapsUrl.length < 1 || googleMapsUrl.length > 40) {
			//displayFieldError("googleMapsUrl");
			validated = false;
		}

		return validated;
	}

	async submit() {
		const url = "http://localhost:8080/countries";
		const dataContact = this.data;
		const response = await postJson(url, dataContact);

		function displayFieldError(fieldName) {
			const fieldError = document.getElementById(fieldName);
			fieldError?.classList.add("border-danger");
			fieldError.addEventListener("input", () => {
				fieldError.classList.remove("border-danger");
			});
		}

		if (response.status === 200) {
			console.log("create country success!");
			return;
		} else {
			const errors = await response.json();
			console.log("errors", errors);

			const keysFieldName = Object.keys(dataContact);
			const keysError = Object.keys(errors);
			keysFieldName.map((key) => {
				if (keysError.includes(key)) {
					displayFieldError(key);
				}
			});

			/*for (const key in dataContact) {
				console.log(key, dataContact[key]);
				for (let i = 0; i < errors.length; i++) {
					if (key === errors[i].fieldName) {
						displayFieldError(key);
					}
				}
			}*/

			// function displayErrors(fieldName) {
			// 	for (let i = 0; i < errors.length; i++) {
			// 		const fieldError = document.getElementById(fieldName);
			// 		if (errors[i].fieldName === fieldName) {
			// 			// const fieldError = document.getElementById(fieldName);
			// 			fieldError.classList.add("border-danger");
			// 			console.log(
			// 				"Code d'erreur pour " + fieldName + ": " + errors[i].code,
			// 			);
			// 			// this.onValidationErrors();
			// 			return;
			// 		} else {
			// 			fieldError.classList.remove("border-danger");
			// 		}
			// 	}
			// 	console.log("Aucun code d'erreur trouvé pour " + fieldName);
			// }

			//displayErrors("isoCode");
			//displayErrors("tld");
		}
	}

	template() {
		return /*html*/ `
		<main class="container">
      		<h1 class="mt-3">${msg("rcCountryCreateTitle")}</h1>
			  <div class="row d-flex flex-lg-row flex-column-reverse">
			  <div class="col-lg-6 col-sm-12 text-center">
				<img
				  src="../../public/planete-terre.webp"
				  alt="" class="my-5 w-100 image-fluid rounded-5 shadow-lg">
			  </div>

			  <div class="col-lg-6 col-sm-12">
				<form class="my-lg-5 my-3 mx-lg-5 px-lg-3" novalidate>

				  <div class="mb-3">
					<label for="countryName" class="form-label">${msg(
						"rcCreateCountryName",
					)}<span class="text-danger">*</span></label>
					<input type="countryName" class="form-control" id="countryName" name="countryName">
					<div class="form-text">${msg("rcCreateCountryNameHelp")}</div>
				  </div>

				  <div class="mb-3">
					<label for="isoCode" class="form-label">${msg(
						"rcCreateCountryIsoCode",
					)}<span class="text-danger">*</span></label>
					<input type="isoCode" class="form-control" id="isoCode" name="isoCode">
					<div class="form-text">${msg("rcCreateCountryIsoCodeHelp")}</div>
					<div class="form-text text-danger d-none" id="isoCodeError" >${msg(
						"rcCreateCountryIsoCodeError",
					)}</div>
				  </div>
				  
				  <div class="mb-3">
					<label for="population" class="form-label">${msg(
						"rcCreatecountryPopulation",
					)}<span class="text-danger">*</span></label>
					<input type="population" class="form-control" id="countryPopulation" name="countryPopulation">
					<div class="form-text">${msg("rcCreatecountryPopulationHelp")}</div>
				</div>

					<div class="mb-3">
					<label for="area" class="form-label">${msg("rcCreatecountryArea")}<span class="text-danger">*</span></label>
					<input type="area" class="form-control" id="countryArea" name="countryArea">
					<div class="form-text">${msg("rcCreatecountryAreaHelp")}</div>
					</div>

					<div class="mb-3">
					<label for="capitalName" class="form-label">${msg(
						"rcCreateCountryCapitalName",
					)}<span class="text-danger">*</span></label>
					<input type="capitalName" class="form-control" id="capitalName" name="capitalName">
					<div class="form-text">${msg("rcCreateCountryCapitalNameHelp")}</div>
					</div>

					<div class="mb-3">
					<label for="tld" class="form-label">${msg("rcCreateCountryTld")}<span class="text-danger">*</span></label>
					<input type="tld" class="form-control" id="tld" name="tld">
					<div class="form-text">${msg("rcCreateCountryTldHelp")}</div>
					</div>

					<div class="mb-3">
					<label for="flagUrl" class="form-label">${msg(
						"rcCreateCountryFlagUrl",
					)}<span class="text-danger">*</span></label>
					<input type="flagUrl" class="form-control" id="flagUrl" name="flagUrl">
					<div class="form-text">${msg("rcCreateCountryFlagUrlHelp")}</div>
					</div>

					<div class="mb-3">
					<label for="coatOfArmUrl" class="form-label">${msg(
						"rcCreateCountryCoatOfArmUrl",
					)}<span class="text-danger">*</span></label>
					<input type="coatOfArmUrl" class="form-control" id="coatOfArmUrl" name="coatOfArmUrl">
					<div class="form-text">${msg("rcCreateCountryCoatOfArmUrlHelp")}</div>
					</div>

					<div class="mb-3">
					<label for="googleMapsUrl" class="form-label">${msg(
						"rcCreateCountryGoogleMapsUrl",
					)}<span class="text-danger">*</span></label>
					<input type="googleMapsUrl" class="form-control" id="googleMapsUrl" name="googleMapsUrl">
					<div class="form-text">${msg("rcCreateCountryGoogleMapsUrlHelp")}</div>
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
