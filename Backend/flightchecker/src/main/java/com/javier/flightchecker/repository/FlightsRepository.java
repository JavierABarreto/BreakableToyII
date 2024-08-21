package com.javier.flightchecker.repository;

import com.javier.flightchecker.models.Flight;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FlightsRepository {
    public List<Flight> findAll() {
        return List.of(new Flight(1));
    }
}
