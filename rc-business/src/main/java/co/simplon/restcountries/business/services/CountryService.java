package co.simplon.restcountries.business.services;

import java.util.List;

import org.springframework.stereotype.Service;

import co.simplon.restcountries.business.dtos.CountryAdminView;
import co.simplon.restcountries.business.dtos.CountryCreate;
import co.simplon.restcountries.business.dtos.CountryView;
import co.simplon.restcountries.business.entities.Country;
import co.simplon.restcountries.business.repositories.CountryJpaRepository;

@Service
public class CountryService {

    private final CountryJpaRepository repository;

    public CountryService(CountryJpaRepository repository) {
	this.repository = repository;
    }

    public List<CountryView> getCountryViews() {
	return repository.findAllProjectedByOrderByCountryName();
	// List<Country> countries = repository.findAll();

	/* List<CountryView> views = new ArrayList<>(); */

	/*
	 * for (co.simplon.restcountries.business.entities.Country country : countries)
	 * { CountryView view = new CountryView(country.getCountryName(),
	 * country.getCapitalName(), country.getCountryPopulation(),
	 * country.getFlagUrl()); views.add(view); }
	 */

	/*
	 * Connect to db send sql "select" convert data from db into Java object
	 */
	// return views;
    }

    public CountryView getOne(Long id) {
	return repository.findProjectedById(id);
    }

    public void create(CountryCreate inputs) {
	Country country = new Country();

	country.setIsoCode(inputs.isoCode());
	country.setCountryName(inputs.countryName());
	country.setCountryPopulation(inputs.countryPopulation());
	country.setCountryArea(inputs.countryArea());
	country.setCapitalName(inputs.capitalName());
	country.setTld(inputs.tld());
	country.setFlagUrl(inputs.flagUrl());
	country.setCoatOfArmUrl(inputs.coatOfArmUrl());
	country.setGoogleMapsUrl(inputs.googleMapsUrl());

	repository.save(country);
    }

    public List<CountryAdminView> getCountryAdminView() {
	return repository.findAllProjectedByOrderByIsoCode();
    }

    public boolean existsByIsoCode(String value) {
	return repository.existsByIsoCodeIgnoreCase(value);
    }

    public boolean existsByTld(String value) {
	return repository.existsByTldIgnoreCase(value);
    }

//    public boolean existsByIsoCode(String value) {
//
//	return repository.existsByIsoCode(value);
//    }

}
//[{"name": "Republic of Cyprus", "capital": "Nicosia","population": 1207361,"flagsPng": "https://flagcdn.com/w320/sk.png"}, {"name": "Republic of Cyprus", "capital": "Nicosia","population": 1207361,"flagsPng": "https://flagcdn.com/w320/sk.png"}]