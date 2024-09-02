package com.javier.flightchecker;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.javier.flightchecker.models.FlightsData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class FlightcheckerApplicationTests {

	@Autowired
	TestRestTemplate restTemplate;

	@Test
	void getCurrencies () {
		ResponseEntity<List> GetResponse = restTemplate.getForEntity("/currencies", List.class);
		assertThat(GetResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

		List data = GetResponse.getBody();
		assertThat(data.size()).isEqualTo(3);
		assertThat(data.get(0)).isEqualTo("USD");
	}

	@Test
	void getFlightFromFlightSearch () {
		HashMap<String, String> parameters = new HashMap<>();
		parameters.put("departureAirportCode", "BOS");
		parameters.put("arrivalAirportCode", "EWR");
		parameters.put("departureDate", "2024-10-02");
		parameters.put("numberAdults", "1");
		parameters.put("currency", "USD");
		parameters.put("nonStops", "false");
		parameters.put("sortByPrice", "true");
		parameters.put("orderPrice", "asc");

		ResponseEntity<FlightsData> GetResponse = restTemplate.getForEntity("/flights", FlightsData.class, parameters);
		assertThat(GetResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

		FlightsData data = GetResponse.getBody();
		assertThat(data.flights().size()).isGreaterThan(0);
	}

}
