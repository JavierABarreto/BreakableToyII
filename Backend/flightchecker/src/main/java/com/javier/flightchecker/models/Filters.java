package com.javier.flightchecker.models;

public record Filters(
    String departureAirportCode,
    String arrivalAirportCode,
    String departureDate,
    String returnDate,
    Integer numberAdults,
    String currency,
    Boolean stops
) {}
