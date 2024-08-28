package com.javier.flightchecker.exceptions;

public class AccessTokenError extends RuntimeException {
  public AccessTokenError(String message) {
    super(message);
  }
}
