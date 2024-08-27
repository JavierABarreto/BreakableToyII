package com.javier.flightchecker.services;

import com.javier.flightchecker.exceptions.FlightCheckerError;
import com.javier.flightchecker.models.Filters;
import org.apache.tomcat.util.json.JSONParser;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

public class FlightCheckerService {
    private String baseURL1 = "https://test.api.amadeus.com/v1/";
    private String baseURL2 = "https://test.api.amadeus.com/v2/";

    public Object getAirlineData(String IATACode, String token) {
        Object data = List.of();

        try {
            String URL = "reference-data/airlines?airlineCodes=" + IATACode;

            URI URIRequest = new URI(baseURL1 + URL);

            HttpRequest getRequest = HttpRequest.newBuilder()
                    .uri(URIRequest)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .header("Authorization", "Bearer "+token)
                    .GET()
                    .build();

            HttpClient httpClient = HttpClient.newHttpClient();

            HttpResponse<String> response = httpClient.send(getRequest, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                JSONParser res = new JSONParser(response.body());
                data = res.object().get("data");

                return data;
            }

            throw new FlightCheckerError(response.toString());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public Object getFlights (Filters filters, String token) {
        Object data = List.of();

        String departureAirportCode = filters.departureAirportCode();
        String arrivalAirportCode = filters.arrivalAirportCode();
        String departureDate = filters.departureDate();
        Integer numberAdults = filters.numberAdults();
        String currency = filters.currency();
        Boolean stops = filters.stops();
        Integer max = filters.max();

        try {
            String URL = "shopping/flight-offers?originLocationCode="+ departureAirportCode +
                         "&destinationLocationCode="+ arrivalAirportCode +
                         "&departureDate="+ departureDate +
                         "&adults="+ numberAdults +
                         "&nonStop="+ stops +
                         "&currencyCode="+ currency +
                         "&max="+max;

            URI URIRequest = new URI(baseURL2 + URL);

            HttpRequest getRequest = HttpRequest.newBuilder()
                    .uri(URIRequest)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .header("Authorization", "Bearer "+token)
                    .GET()
                    .build();

            HttpClient httpClient = HttpClient.newHttpClient();

            HttpResponse<String> response = httpClient.send(getRequest, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                JSONParser res = new JSONParser(response.body());
                data = res.object().get("data");

                return data;
            }

            throw new FlightCheckerError(response.toString());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public Object getIATACodes (String token, String name) {
        Object data = List.of();
        Integer limit = 25;
        Integer offset = 0;

        try {
            String URL = "reference-data/locations?subType=AIRPORT&keyword="+ name +
                         "&page%5Blimit%5D="+ limit +"&page%5Boffset%5D="+ offset +
                         "&sort=analytics.travelers.score&view=LIGHT";

            URI URIRequest = new URI(baseURL1 + URL);

            HttpRequest getRequest = HttpRequest.newBuilder()
                    .uri(URIRequest)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .header("Authorization", "Bearer "+token)
                    .GET()
                    .build();

            HttpClient httpClient = HttpClient.newHttpClient();

            HttpResponse<String> response = httpClient.send(getRequest, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                JSONParser res = new JSONParser(response.body());
                data = res.object().get("data");

                return data;
            }

            throw new FlightCheckerError(response.toString());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
