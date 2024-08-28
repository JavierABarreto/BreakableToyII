package com.javier.flightchecker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;


@SpringBootApplication
@Configuration
public class FlightcheckerApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightcheckerApplication.class, args);
	}

}
