package com.javier.flightchecker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FlightCheckerController {
    String apiURL = "https://test.api.amadeus.com/v1/";

    @GetMapping("/")
    public String index(){
        return "Welcome to flight checker API";
    }

    @GetMapping("/flights")
    public String getFlights(@RequestBody String hello) {

        return "This are the flights:";
    }
}