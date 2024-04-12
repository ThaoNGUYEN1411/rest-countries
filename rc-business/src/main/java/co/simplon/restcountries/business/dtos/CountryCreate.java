package co.simplon.restcountries.business.dtos;

import co.simplon.restcountries.business.dtos.validators.UniqueIsoCode;
import co.simplon.restcountries.business.dtos.validators.UniqueTld;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record CountryCreate(
	// ??? validation: E1: add dependencies.pour mettre le anotation, il faul
	// verifier bien le doc, jakarta et la concept
	@NotBlank @Size(min = 2, max = 2) @UniqueIsoCode String isoCode,
	//
	@NotBlank @Size(min = 2, max = 60) String countryName,
	//
	@Positive int countryPopulation,
	//
	@Positive double countryArea,
	//
	@NotBlank @Size(min = 1, max = 200) String capitalName,
	//
	// Si pas notBlank " "ca passer
	@Size(min = 3, max = 3) @UniqueTld String tld,
	//
	@NotBlank @Size(min = 1, max = 40) String flagUrl,
	//
	@Size(min = 1, max = 60) String coatOfArmUrl,
	//
	@NotBlank @Size(min = 1, max = 40) String googleMapsUrl) {
}

//Representer les data qui se tranmettent entre le serveur et le client  Data binding
