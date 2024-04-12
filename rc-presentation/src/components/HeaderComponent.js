import { msg, fmtDt } from "../../assets/i18n.js";
import BaseComponent from "../../assets/BaseComponent.js";

export default class HeaderComponent extends BaseComponent {
	constructor() {
		super();
	}

	//now est un filde ajouter automatique
	beforeRender() {
		this.data.name = "Thao NGUYEN";
		this.data.now = new Date();
	}

	template() {
		// console.log(this.data);
		return /*html*/ `
        <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <a href="/#/home" class="text-decoration-none"><span class="navbar-brand">${msg(
							"rcBrand",
						)}</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/#/table">${msg("rcMenuTable")}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/contact">${msg("rcMenuContact")}</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="/#/country-create">${msg(
								"rcMenuCountryCreate",
							)}</a>
            </li> 
          </ul>
        </div>
        
        </nav>
        <div class= "shadow-sm bg-dark">
          <div class="container text-light">${this.data.name}, ${fmtDt(
			this.data.now,
		)}<div>
        </div>
        </header>
        
        `;
	}
}
