package com.javier.flightchecker.controllers;

import com.javier.flightchecker.functions.FlightCheckerService;
import com.javier.flightchecker.repository.AccessTokenRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class FlightCheckerController {
    private final FlightCheckerService api = new FlightCheckerService();
    private final AccessTokenRepository token = new AccessTokenRepository();

    @GetMapping("/flights")
    public String index(){
        try {
            if(token.isExpired()) {
                token.setToken(api.getAccessToken());
                token.setTokenExpTime((new Date().getTime()/1000) + 1799);

                return "Getting new token";
            } else {
                return "Continuing....";
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/flights/search")
    public String getFlights() {
        try {
            return "asd";
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}