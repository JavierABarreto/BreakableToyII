package com.javier.flightchecker.controllers;

import com.javier.flightchecker.functions.FlightCheckerFunctions;
import com.javier.flightchecker.models.Filters;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FlightCheckerController {
    private final FlightCheckerFunctions flightChecker = new FlightCheckerFunctions();

    @GetMapping("/flights")
    public Object getFlights(
        @RequestParam(required = false, defaultValue = "") String departureAirportCode,
        @RequestParam(required = false, defaultValue = "") String arrivalAirportCode,
        @RequestParam(required = false, defaultValue = "") String departureDate,
        @RequestParam(required = false, defaultValue = "") String returnDate,
        @RequestParam(required = false, defaultValue = "1") Integer numberAdults,
        @RequestParam(required = false, defaultValue = "") String currency,
        @RequestParam(required = false, defaultValue = "false") Boolean nonStops,
        @RequestParam(required = false, defaultValue = "20") Integer max
    ){
        Filters filters = new Filters(departureAirportCode, arrivalAirportCode, departureDate, returnDate, numberAdults, currency, nonStops, max);

        return flightChecker.getFlights(filters);
    }

    @GetMapping("/airlineData")
    public Object getAirlineInfo(@RequestParam(required = false, defaultValue = "") String IATACode) {
        return flightChecker.getAirlineData(IATACode);
    }

    @GetMapping("/IATACodes")
    public Object getIATACodes(@RequestParam(required = false, defaultValue = "") String name) {
        return flightChecker.IATACodes(name);
    }
}