package com.javier.flightchecker.models;

import java.util.List;

public record FlightsData(
    Integer currentPage,
    List<Object> flights,
    Double nPages
) {
}
