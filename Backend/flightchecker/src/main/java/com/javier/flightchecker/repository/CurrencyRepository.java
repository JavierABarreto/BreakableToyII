package com.javier.flightchecker.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CurrencyRepository {
    public List<String> findAll() {
        return List.of("USD", "MXN", "EUR");
    }
}
