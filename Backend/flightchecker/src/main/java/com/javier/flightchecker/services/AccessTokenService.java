package com.javier.flightchecker.services;

import org.apache.tomcat.util.json.JSONParser;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class AccessTokenService {
    public String getAccessToken() throws Exception {
        try {
            String accessToken = "";

            URI uri = new URI("https://test.api.amadeus.com/v1/security/oauth2/token");
            String requestBody = "grant_type=client_credentials&client_id=SECRET&client_secret=SECRET";

            HttpRequest postRequest = HttpRequest.newBuilder()
                    .uri(new URI("https://test.api.amadeus.com/v1/security/oauth2/token"))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpClient httpClient = HttpClient.newHttpClient();

            HttpResponse<String> response = httpClient.send(postRequest, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                JSONParser res = new JSONParser(response.body());
                accessToken = res.object().get("access_token").toString();

                return accessToken;
            }

            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
