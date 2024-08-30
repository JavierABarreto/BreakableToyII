package com.javier.flightchecker.functions;

import com.javier.flightchecker.models.Filters;
import com.javier.flightchecker.models.FlightsData;
import com.javier.flightchecker.repository.AccessTokenRepository;
import com.javier.flightchecker.services.AccessTokenService;
import com.javier.flightchecker.services.FlightCheckerService;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

public class FlightCheckerFunctions {
    private final AccessTokenService api = new AccessTokenService();
    private final AccessTokenRepository token = new AccessTokenRepository();
    private final FlightCheckerService flight = new FlightCheckerService();

    public Object getAirlineData (String IATACode) {
        try {
            TokenIsExpired();

            return flight.getAirlineData(IATACode, token.getToken());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public FlightsData getFlights (Filters filters) {
        try {
            // TokenIsExpired();

            return flight.getFlights(filters, token.getToken());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public Object IATACodes (String name) {
        try {
            TokenIsExpired();

            return flight.getIATACodes(token.getToken(), name);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void TokenIsExpired () {
        try {
            if (token.isExpired()) {
                token.setToken(api.getAccessToken());
                token.setTokenExpTime((new Date().getTime() / 1000) + 1799);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
