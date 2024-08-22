package com.javier.flightchecker.controllers;

import com.javier.flightchecker.repository.CurrencyRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CurrenciesController {
    private final CurrencyRepository currencyRepository;

    public CurrenciesController(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }

    @GetMapping("/currencies")
    public List<String> getAll() {
        return currencyRepository.findAll();
    }
}
