package co.simplon.restcountries.business.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.restcountries.business.dtos.ContactForm;
import co.simplon.restcountries.business.services.ContactService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/send-mail")
@CrossOrigin("*")
public class ContactController {
    private final ContactService service;

    public ContactController(ContactService service) {
	this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    void sendMail(@RequestBody @Valid ContactForm form) {
	service.sendMail(form);
    }

}
