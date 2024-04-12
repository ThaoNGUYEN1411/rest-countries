import messages from "./messages/fr-FR.js";
import { initI18n } from "../assets/i18n.js";
import initRouter from "../assets/router.js";
import routes from "./routes/routes.js";
import TableComponent from "./components/TableComponent.js";
import ContactComponent from "./components/ContactComponent.js";
import HeaderComponent from "./components/HeaderComponent.js";
import HomeComponent from "./components/HomeComponent.js";
import CountryCreateComponent from "./components/CountryCreateComponent.js";

initRouter(routes);
initI18n(messages);
customElements.define("rc-header", HeaderComponent);
customElements.define("rc-homecomponent", HomeComponent);
customElements.define("rc-tablecomponent", TableComponent);
customElements.define("rc-contactcomponent", ContactComponent);
customElements.define("rc-countrycreatecomponent", CountryCreateComponent);
