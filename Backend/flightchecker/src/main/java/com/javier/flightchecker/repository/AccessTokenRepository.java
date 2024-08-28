package com.javier.flightchecker.repository;

import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public class AccessTokenRepository {
    private String token = "";
    private Long expTime = Long.valueOf(0);

    public void setToken (String aToken) {
        token = aToken;
    }

    public String getToken () {
        return token;
    }

    public void setTokenExpTime(Long time) {
        this.expTime = time;
    }

    public Boolean isExpired () {
        Boolean valid = false;
        Long time = (new Date().getTime()/1000);

        if (time < expTime) {
            valid = false;
        } else {
            valid = true;
        }

        return valid;
    }
}
