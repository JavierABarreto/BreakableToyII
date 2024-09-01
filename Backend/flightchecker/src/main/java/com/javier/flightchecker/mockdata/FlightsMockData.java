package com.javier.flightchecker.mockdata;

public class FlightsMockData {
    public String getAirlineData () {
        String jsonData= "{\"meta\": {\"count\": 1,\"links\": {\"self\":\"https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=BA\"}},\"data\": [{\"type\": \"airline\",\"iataCode\": \"BA\",\"icaoCode\": \"BAW\",\"businessName\": \"BRITISH AIRWAYS\",\"commonName\": \"BRITISH A/W\"}]}";
        
        return jsonData;
    }

    public String getMockFlights () {
        String jsonData = "{\"meta\":{\"count\":35},\"data\":[{\"type\":\"flight-offer\",\"id\":\"1\",\"source\":\"GDS\",\"instantTicketingRequired\":false,\"nonHomogeneous\":false,\"oneWay\":false,\"isUpsellOffer\":false,\"lastTicketingDate\":\"2024-08-28\",\"lastTicketingDateTime\":\"2024-08-28\",\"numberOfBookableSeats\":3,\"itineraries\":[{\"duration\":\"PT13H25M\",\"segments\":[{\"departure\":{\"iataCode\":\"SYD\",\"terminal\":\"0\",\"at\":\"2024-09-01T07:00:00\"},\"arrival\":{\"iataCode\":\"DPS\",\"terminal\":\"0\",\"at\":\"2024-09-01T11:10:00\"},\"carrierCode\":\"OD\",\"number\":\"172\",\"aircraft\":{\"code\":\"738\"},\"operating\":{\"carrierCode\":\"OD\"},\"duration\":\"PT6H10M\",\"id\":\"49\",\"numberOfStops\":0,\"blacklistedInEU\":false},{\"departure\":{\"iataCode\":\"DPS\",\"terminal\":\"D\",\"at\":\"2024-09-01T14:15:00\"},\"arrival\":{\"iataCode\":\"DMK\",\"terminal\":\"0\",\"at\":\"2024-09-01T17:25:00\"},\"carrierCode\":\"ID\",\"number\":\"7637\",\"aircraft\":{\"code\":\"738\"},\"operating\":{\"carrierCode\":\"ID\"},\"duration\":\"PT4H10M\",\"id\":\"50\",\"numberOfStops\":0,\"blacklistedInEU\":false}]}],\"price\":{\"currency\":\"EUR\",\"total\":\"240.04\",\"base\":\"161.00\",\"fees\":[{\"amount\":\"0.00\",\"type\":\"SUPPLIER\"},{\"amount\":\"0.00\",\"type\":\"TICKETING\"}],\"grandTotal\":\"240.04\"},\"pricingOptions\":{\"fareType\":[\"PUBLISHED\"],\"includedCheckedBagsOnly\":false},\"validatingAirlineCodes\":[\"GP\"],\"travelerPricings\":[{\"travelerId\":\"1\",\"fareOption\":\"STANDARD\",\"travelerType\":\"ADULT\",\"price\":{\"currency\":\"EUR\",\"total\":\"240.04\",\"base\":\"161.00\"},\"fareDetailsBySegment\":[{\"segmentId\":\"49\",\"cabin\":\"ECONOMY\",\"fareBasis\":\"XOWAU\",\"class\":\"X\",\"includedCheckedBags\":{\"weight\":0,\"weightUnit\":\"KG\"}},{\"segmentId\":\"50\",\"cabin\":\"ECONOMY\",\"fareBasis\":\"VOWID\",\"class\":\"V\",\"includedCheckedBags\":{\"weight\":0,\"weightUnit\":\"KG\"}}]}]},{\"type\":\"flight-offer\",\"id\":\"2\",\"source\":\"GDS\",\"instantTicketingRequired\":false,\"nonHomogeneous\":false,\"oneWay\":false,\"isUpsellOffer\":false,\"lastTicketingDate\":\"2024-09-01\",\"lastTicketingDateTime\":\"2024-09-01\",\"numberOfBookableSeats\":4,\"itineraries\":[{\"duration\":\"PT26H50M\",\"segments\":[{\"departure\":{\"iataCode\":\"SYD\",\"terminal\":\"1\",\"at\":\"2024-09-01T11:25:00\"},\"arrival\":{\"iataCode\":\"XMN\",\"terminal\":\"3\",\"at\":\"2024-09-01T18:50:00\"},\"carrierCode\":\"MF\",\"number\":\"802\",\"aircraft\":{\"code\":\"789\"},\"operating\":{\"carrierCode\":\"MF\"},\"duration\":\"PT9H25M\",\"id\":\"94\",\"numberOfStops\":0,\"blacklistedInEU\":false},{\"departure\":{\"iataCode\":\"XMN\",\"terminal\":\"3\",\"at\":\"2024-09-02T08:40:00\"},\"arrival\":{\"iataCode\":\"BKK\",\"at\":\"2024-09-02T11:15:00\"},\"carrierCode\":\"MF\",\"number\":\"853\",\"aircraft\":{\"code\":\"738\"},\"operating\":{\"carrierCode\":\"MF\"},\"duration\":\"PT3H35M\",\"id\":\"95\",\"numberOfStops\":0,\"blacklistedInEU\":false}]}],\"price\":{\"currency\":\"EUR\",\"total\":\"241.64\",\"base\":\"86.00\",\"fees\":[{\"amount\":\"0.00\",\"type\":\"SUPPLIER\"},{\"amount\":\"0.00\",\"type\":\"TICKETING\"}],\"grandTotal\":\"241.64\"},\"pricingOptions\":{\"fareType\":[\"PUBLISHED\"],\"includedCheckedBagsOnly\":true},\"validatingAirlineCodes\":[\"MF\"],\"travelerPricings\":[{\"travelerId\":\"1\",\"fareOption\":\"STANDARD\",\"travelerType\":\"ADULT\",\"price\":{\"currency\":\"EUR\",\"total\":\"241.64\",\"base\":\"86.00\"},\"fareDetailsBySegment\":[{\"segmentId\":\"94\",\"cabin\":\"ECONOMY\",\"fareBasis\":\"SOW6AAUS\",\"brandedFare\":\"YSTANDARD\",\"brandedFareLabel\":\"ECONOMY STANDARD\",\"class\":\"S\",\"includedCheckedBags\":{\"quantity\":1},\"amenities\":[{\"description\":\"CHECKED BAG 1PC OF 23KG 158CM\",\"isChargeable\":false,\"amenityType\":\"BAGGAGE\",\"amenityProvider\":{\"name\":\"BrandedFare\"}},{\"description\":\"REFUNDABLE  TICKET\",\"isChargeable\":true,\"amenityType\":\"BRANDED_FARES\",\"amenityProvider\":{\"name\":\"BrandedFare\"}},{\"description\":\"CHANGEABLE  TICKET\",\"isChargeable\":true,\"amenityType\":\"BRANDED_FARES\",\"amenityProvider\":{\"name\":\"BrandedFare\"}}]},{\"segmentId\":\"95\",\"cabin\":\"ECONOMY\",\"fareBasis\":\"SOW6AAUS\",\"brandedFare\":\"YSTANDARD\",\"brandedFareLabel\":\"ECONOMY STANDARD\",\"class\":\"S\",\"includedCheckedBags\":{\"quantity\":1},\"amenities\":[{\"description\":\"CHECKED BAG 1PC OF 23KG 158CM\",\"isChargeable\":false,\"amenityType\":\"BAGGAGE\",\"amenityProvider\":{\"name\":\"BrandedFare\"}},{\"description\":\"REFUNDABLE  TICKET\",\"isChargeable\":true,\"amenityType\":\"BRANDED_FARES\",\"amenityProvider\":{\"name\":\"BrandedFare\"}},{\"description\":\"CHANGEABLE  TICKET\",\"isChargeable\":true,\"amenityType\":\"BRANDED_FARES\",\"amenityProvider\":{\"name\":\"BrandedFare\"}}]}]}]}]}";

        return jsonData;
    }

    public String getAirportData() {
        String jsonData = "{\n" +
                "  \"meta\": {\n" +
                "    \"count\": 1,\n" +
                "    \"links\": {\n" +
                "      \"self\": \"https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=MUC&countryCode=DE\"\n" +
                "    }\n" +
                "  },\n" +
                "  \"data\": [\n" +
                "    {\n" +
                "      \"type\": \"location\",\n" +
                "      \"subType\": \"AIRPORT\",\n" +
                "      \"name\": \"MUNICH INTERNATIONAL\",\n" +
                "      \"detailedName\": \"MUNICH/DE:MUNICH INTERNATIONAL\",\n" +
                "      \"id\": \"AMUC\",\n" +
                "      \"self\": {\n" +
                "        \"href\": \"https://test.api.amadeus.com/v1/reference-data/locations/AMUC\",\n" +
                "        \"methods\": [\n" +
                "          \"GET\"\n" +
                "        ]\n" +
                "      },\n" +
                "      \"timeZoneOffset\": \"+02:00\",\n" +
                "      \"iataCode\": \"MUC\",\n" +
                "      \"geoCode\": {\n" +
                "        \"latitude\": 48.35378,\n" +
                "        \"longitude\": 11.78609\n" +
                "      },\n" +
                "      \"address\": {\n" +
                "        \"cityName\": \"MUNICH\",\n" +
                "        \"cityCode\": \"MUC\",\n" +
                "        \"countryName\": \"GERMANY\",\n" +
                "        \"countryCode\": \"DE\",\n" +
                "        \"regionCode\": \"EUROP\"\n" +
                "      },\n" +
                "      \"analytics\": {\n" +
                "        \"travelers\": {\n" +
                "          \"score\": 27\n" +
                "        }\n" +
                "      }\n" +
                "    }\n" +
                "  ]\n" +
                "}";
        return jsonData;
    }
}