package com.javier.flightchecker.controllers;

import com.javier.flightchecker.models.Flight;
import com.javier.flightchecker.repository.FlightsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FlightCheckerController {
    private final FlightsRepository flightsRepository;
    private final String apikey = "";

    public FlightCheckerController(FlightsRepository flightsRepository) {
        this.flightsRepository = flightsRepository;
    }

    @GetMapping("/flights")
    public String index(){
        return "Welcome to flight checker API";
    }

    @GetMapping("/flights/search")
    public List<Flight> getFlights() {

        return flightsRepository.findAll();
    }
}