package com.javier.flightchecker.controllers;

import com.javier.flightchecker.functions.FlightCheckerFunctions;
import com.javier.flightchecker.models.Filters;
import com.javier.flightchecker.models.FlightsData;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class FlightCheckerController {
    private final FlightCheckerFunctions flightCheckerFunctions = new FlightCheckerFunctions();

    @GetMapping("/flights")
    public FlightsData getFlights(
        @RequestParam(required = false, defaultValue = "") String departureAirportCode,
        @RequestParam(required = false, defaultValue = "") String arrivalAirportCode,
        @RequestParam(required = false, defaultValue = "") String departureDate,
        @RequestParam(required = false, defaultValue = "") String returnDate,
        @RequestParam(required = false, defaultValue = "1") Integer numberAdults,
        @RequestParam(required = false, defaultValue = "") String currency,
        @RequestParam(required = false, defaultValue = "false") Boolean nonStops,
        @RequestParam(required = false, defaultValue = "10") Integer max,
        @RequestParam(required = false, defaultValue = "false") Boolean sortByPrice,
        @RequestParam(required = false, defaultValue = "none") String orderPrice,
        @RequestParam(required = false, defaultValue = "false") Boolean sortByDate,
        @RequestParam(required = false, defaultValue = "none") String orderDate
    ){
        Filters filters = new Filters(departureAirportCode, arrivalAirportCode, departureDate, returnDate, numberAdults, currency, nonStops, max, sortByPrice, orderPrice, sortByDate, orderDate);

        return flightCheckerFunctions.getFlights(filters);
    }

    @GetMapping("/airlineData")
    public Object getAirlineInfo(@RequestParam(required = false, defaultValue = "") String IATACode) {
        return flightCheckerFunctions.getAirlineData(IATACode);
    }

    @GetMapping("/IATACodes")
    public Object getIATACodes(@RequestParam(required = false, defaultValue = "") String name) {
        return flightCheckerFunctions.IATACodes(name);
    }
}