package com.javier.flightchecker.services;

import com.javier.flightchecker.exceptions.FlightCheckerError;
import com.javier.flightchecker.mockdata.FlightsMockData;
import com.javier.flightchecker.models.Filters;
import com.javier.flightchecker.models.FlightsData;

import org.apache.tomcat.util.json.JSONParser;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.*;

public class FlightCheckerService {
    private String baseURL1 = "https://test.api.amadeus.com/v1/";
    private String baseURL2 = "https://test.api.amadeus.com/v2/";
    private FlightsMockData mockData = new FlightsMockData();

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


    public FlightsData getFlights (Filters filters, String token) {
        Object data = List.of();

        String departureAirportCode = filters.departureAirportCode();
        String arrivalAirportCode = filters.arrivalAirportCode();
        String departureDate = filters.departureDate();
        String returnDate = filters.returnDate();
        Integer numberAdults = filters.numberAdults();
        String currency = filters.currency();
        Boolean stops = filters.stops();
        Integer max = filters.max();
        Boolean sortByPrice = filters.sortByPrice();
        String orderPrice = filters.orderPrice();
        Boolean sortByDate = filters.sortByDate();
        String orderDate = filters.orderDate();

        try {
                String URL = "shopping/flight-offers?" +
                             "originLocationCode="+ departureAirportCode +
                             "&destinationLocationCode="+ arrivalAirportCode +
                             "&departureDate="+ departureDate +
                             "&adults="+ numberAdults +
                             "&nonStop="+ stops +
                             "&currencyCode="+ currency +
                             "&max="+max;

                // if (!returnDate.isBlank()) {
                //     URL = URL + "&returnDate=" + returnDate;
                // }

                // URI URIRequest = new URI(baseURL2 + URL);

                // HttpRequest getRequest = HttpRequest.newBuilder()
                //         .uri(URIRequest)
                //         .header("Content-Type", "application/x-www-form-urlencoded")
                //         .header("Authorization", "Bearer "+token)
                //         .GET()
                //         .build();

                // HttpClient httpClient = HttpClient.newHttpClient();

                // HttpResponse<String> response = httpClient.send(getRequest, HttpResponse.BodyHandlers.ofString());

                // if (response.statusCode() == 200) {
                    // LinkedHashMap meta = (LinkedHashMap) new JSONParser(response.body()).object().get("meta");
                    LinkedHashMap meta = (LinkedHashMap) new JSONParser(mockData.getMockFlights()).object().get("meta");
                    Integer count = Integer.parseInt(meta.get("count").toString());

                    // List<Object> flights = (List<Object>) new JSONParser(response.body()).object().get("data");
                    List<Object> flights = (List<Object>) new JSONParser(mockData.getMockFlights()).object().get("data");

                    List<Object> sortedFlights = sorter(flights, sortByPrice, orderPrice, sortByDate, orderDate);

                    Integer tempMax = max;
                    Integer min = max - 9;
                    Double nPages = 0.0;
                    Integer currentPage = 0;

                    if (sortedFlights.size() <= 10) {
                        currentPage = 1;
                    } else {
                        currentPage = tempMax / 10;
                    }


                    if (sortedFlights.size() <= 10) {
                        nPages = 1.0;
                    } else {
                        nPages = sortedFlights.size()/10.0;

                        if (sortedFlights.size() % 10 != 0) {
                            nPages += 1.0;
                        }

                        nPages = Math.ceil(nPages);
                    }

                    data = sortedFlights;

                    FlightsData flightsData = new FlightsData(currentPage, data, nPages);
                    return flightsData;
                // }

                // throw new FlightCheckerError(response.toString());
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
                         "&sort=analytics.travelers.score&view=FULL";

//            URI URIRequest = new URI(baseURL1 + URL);
//
//            HttpRequest getRequest = HttpRequest.newBuilder()
//                    .uri(URIRequest)
//                    .header("Content-Type", "application/x-www-form-urlencoded")
//                    .header("Authorization", "Bearer "+token)
//                    .GET()
//                    .build();
//
//            HttpClient httpClient = HttpClient.newHttpClient();
//
//            HttpResponse<String> response = httpClient.send(getRequest, HttpResponse.BodyHandlers.ofString());
//
//            if (response.statusCode() == 200) {
//                JSONParser res = new JSONParser(response.body());
                data = new JSONParser(mockData.getAirportData()).object().get("data");

                return data;
//            }

//            throw new FlightCheckerError(response.toString());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private List<Object>  sorter (List<Object> flights, Boolean sortByPrice, String orderPrice, Boolean sortByDate, String orderDate) {
        if(sortByPrice) {
            List<Object> sortedByPrice = flights;

            for (Integer i = 0; i < sortedByPrice.size() - 1; i++) {
                LinkedHashMap FlightObj1 = (LinkedHashMap) sortedByPrice.get(i+1);
                LinkedHashMap FlightObj2 = (LinkedHashMap) sortedByPrice.get(i);

                LinkedHashMap flightPrice1 = (LinkedHashMap) FlightObj1.get("price");
                LinkedHashMap flightPrice2 = (LinkedHashMap) FlightObj2.get("price");

                Double total1 = Double.parseDouble(flightPrice1.get("total").toString());
                Double total2 = Double.parseDouble(flightPrice2.get("total").toString());

                if (total2 < total1) {
                    sortedByPrice.set(i, FlightObj1);
                    sortedByPrice.set(i+1, FlightObj2);
                }
            }

            switch (orderPrice) {
                case "asc":
                    flights = sortedByPrice.reversed();
                    break;
                case "dsc":
                    flights = sortedByPrice;
                    break;
                default:
                    break;
            }
        }


        if(sortByDate) {
            List<Object> sortedByDate = flights;

            for (Integer i = 0; i < sortedByDate.size() - 1; i++) {
                LinkedHashMap FlightObj1 = (LinkedHashMap) flights.get(i+1);
                LinkedHashMap FlightObj2 = (LinkedHashMap) flights.get(i);

                ArrayList flightIti1 = (ArrayList) FlightObj1.get("itineraries");
                ArrayList flightIti2 = (ArrayList) FlightObj2.get("itineraries");

                LinkedHashMap flightItiData1 = (LinkedHashMap) flightIti1.getFirst();
                LinkedHashMap flightItiData2 = (LinkedHashMap) flightIti2.getFirst();

                ArrayList flightSegments1 = (ArrayList) flightItiData1.get("segments");
                ArrayList flightSegments2 = (ArrayList) flightItiData2.get("segments");

                LinkedHashMap flightSegmentsData1 = (LinkedHashMap) flightSegments1.getFirst();
                LinkedHashMap flightSegmentsData2 = (LinkedHashMap) flightSegments2.getFirst();

                LinkedHashMap flightDeparture1 = (LinkedHashMap) flightSegmentsData1.get("departure");
                LinkedHashMap flightDeparture2 = (LinkedHashMap) flightSegmentsData2.get("departure");

                Long flightAt1 = LocalDateTime.parse((String) flightDeparture1.get("at")).toEpochSecond(ZoneOffset.UTC);
                Long flightAt2 = LocalDateTime.parse((String) flightDeparture2.get("at")).toEpochSecond(ZoneOffset.UTC);

                if (flightAt2 < flightAt1) {
                    sortedByDate.set(i, FlightObj1);
                    sortedByDate.set(i+1, FlightObj2);
                }
            }

            switch (orderDate) {
                case "asc":
                    flights = sortedByDate.reversed();
                    break;
                case "dsc":
                    flights = sortedByDate;
                    break;
                default:
                    break;
            }
        }

        return flights;
    }
}
