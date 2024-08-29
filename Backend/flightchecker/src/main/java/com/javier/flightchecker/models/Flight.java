package com.javier.flightchecker.models;

import java.util.List;

public record Flight(
    String type,
    String id,
    String source,
    Boolean instantTicketingRequired,
    Boolean nonHomogeneous,
    Boolean oneWay,
    Boolean isUpsellOffer,
    String lastTicketingDate,
    String lastTicketingDateTime,
    Integer numberOfBookableSeats,
    List itineraries,
    Object price,
    Object pricingOptions,
    List validatingAirlineCodes,
    List travelerPricings
) {
}
