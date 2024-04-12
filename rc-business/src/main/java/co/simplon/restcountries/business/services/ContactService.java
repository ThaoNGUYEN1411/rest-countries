package co.simplon.restcountries.business.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import co.simplon.restcountries.business.dtos.ContactForm;
//import co.simplon.restcountries.ContactForm;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class ContactService {
    @Value("${co.simplon.restcountries.email.from}")
    private String emailFrom;

    private final JavaMailSender sender;

    public ContactService(JavaMailSender sender) {
	this.sender = sender;
    }

    public void sendMail(ContactForm form) {
	try { // non exception-raising code also in try-catch: all or nothing
	    MimeMessage message = sender.createMimeMessage();
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	    helper.setFrom(emailFrom);
	    helper.setReplyTo(emailFrom);
	    helper.setTo(form.email());
	    helper.setSubject("Test mail from Spring");
	    helper.setText(form.comments(), true);
	    sender.send(message);
	} catch (MessagingException e) {
	    // TODO Auto-generated catch block
	    System.err.println(e);
	}
	//
	System.out.println(form);
	System.out.println("email from = " + emailFrom);
    }
}
