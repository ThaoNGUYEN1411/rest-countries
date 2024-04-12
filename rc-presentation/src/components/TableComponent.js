import BaseComponent from "../../assets/BaseComponent.js";
import { getJson } from "../../assets/api.js";
import { fmtNb, msg } from "../../assets/i18n.js";

export default class TableComponent extends BaseComponent {
	constructor() {
		super();
	}
	async beforeRender() {
		//"https://restcountries.com/v3.1/region/europe?fields=name,flags,coatOfArms,area,maps,cca2,tld
		const url = "http://localhost:8080/countries/admin";
		const countries = await getJson(url);
		// //stock dans data
		this.data.countries = countries;
		// console.log(countries);
	}

	template() {
		return /*html*/ `
		<main class="container">
		<h1 class="mt-3">${msg("rcTableTitle")}</h1>
      <div class="table-responsive-sm">
        <table class="table table-striped align-middle">
          <thead>
            <tr class="text-center">
              <th scope="col d-sm-hinde">Flag</th>
              <th scope="col">Coat of arms</th>
              <th scope="col">ISO</th>
              <th scope="col">LTD</th>
              <th scope="col">Name</th>
              <th scope="col" class="text-end">Area</th>
            </tr>
          </thead>
          <tbody id="countries-row">
		  ${this.data.countries
				.map((country) => {
					return this.countryRow(country);
				})
				.join("")}
		  </tbody>
        </table>
      </div>
    </main>
		`;
	}

	countryRow(country) {
		const tld =
			country.tld.length === 0
				? "<i class='bi bi-patch-question text-danger'></i>"
				: country.tld;
		return `
		<tr class="table-row flex-1 text-center">       
				<td class="col-1"> <img class="img-fluid w-50" src=${
					country.flagUrl
				} alt=${country.countryName}>
				</td>
				<td class="col-1"><img class="img-fluid w-50" src=${
					country.coatOfArmUrl
				} alt="..."></td>
				<td class="">${country.isoCode}</td>
				<td class="">${country.tld}</td>
				<td class="fw-bold text-start text-nowrap">${country.countryName}</td>
				<td class="text-end">${fmtNb(country.countryArea)}</td>
		</tr>
	`;
	}
}
