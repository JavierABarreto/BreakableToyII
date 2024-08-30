package com.javier.flightchecker.models;

public record FlightsData(
    Integer currentPage,
    Object flights,
    Double nPages
) {
}
