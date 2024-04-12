import BaseComponent from "../../assets/BaseComponent.js";
import { getJson } from "../../assets/api.js";
import { fmtNb, msg } from "../../assets/i18n.js";
export default class HomeComponent extends BaseComponent {
	constructor() {
		super();
	}
	async beforeRender() {
		//https://restcountries.com/v3.1/region/europe?fields=name,flags,capital,population
		const url = "http://localhost:8080/countries";
		const countries = await getJson(url);
		//stock dans data
		this.data.countries = countries;
		//console.log(countries);
	}
	// let countries = this.data.countries;
	template() {
		return /*html*/ `
		<main class="container">
      		<h1 class="mt-3">${msg("rcHomeTitle")}</h1>
			  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 m-0 g-5">

				${this.data.countries
					.map((country) => {
						return this.countryCard(country);
					})
					.join("")}
				
			  </div>
    	</main>
		`;
	}

	countryCard(country) {
		return /*html*/ `
					<div class="col">
      					<div class="card shadow h-100">
						<a href="${country.googleMapsUrl}" target = "_blank">
       	 					<img src=${country.flagUrl} class="card-img-top" alt="...">
							</a>
       							<div class="card-body">
          							<h2 class="card-title">${country.countryName}</h2>
          						<h3 class="card-text">${country.capitalName}</h3>
          					<span class="text-nowrap">
              					<i class="bi bi-person-arms-up">${fmtNb(
													country.countryPopulation,
												)}</i>
          					</span>
       			 				</div>
     			 		</div>
  					</div>
				`;
	}
}
