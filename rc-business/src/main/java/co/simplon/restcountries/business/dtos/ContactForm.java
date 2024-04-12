package co.simplon.restcountries.business.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactForm(@NotBlank @Size(max = 100) String firstname,

	String lastname,

	@NotBlank @Size(max = 100) String email,

	String comments) {

}
