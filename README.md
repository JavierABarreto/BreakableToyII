# Breakable Toy 2
> Flight Search Application

This project consists on create a Flight Search Application using Springboot + Gradle for the Backend and React + Typesript for the Frontend. This application uses the amadeus API. Also, this project has to be able to run using docker compose.

## Tech Stack 🧰
### Frontend:
- This project uses [Vitejs](https://vitejs.dev/). Vitejs is a frontend tooling for web development which allows us to create amazing web sites.
- [Bootstrap](https://getbootstrap.com/). Styler that let us create amazing designs.
- [Node](https://nodejs.org/en) v20.15.1

### Backend:
- [Springboot](https://spring.io/projects/spring-boot). Springboot v3.3.2 is a tool that let us create web services such as apis.
- Gradle v8.8
- [JUnit](https://junit.org/junit5/).Provides a modern foundation for developer-side testing on the JVM
- Java 21

### Others:
- Docker Compose v2.29.2
- Docker (CLI) v27.1.2
- Colima. Used to run docker con mac.


## Installation 💻
How to install the project in your local:
1. Open a terminal where you can to clone the project.
2. Clone this repository using the following command:
```bash
git clone https://github.com/username/BreakableToyII.git
```
3. Once you have cloned the API go to `Backend/flightchecker/src/main/java/com/javier/flightchecker/services/AccessTokenService.java` and replace
```bash
        String clientId = "secret"; // Replace with the given clientId token
        String clientSecret = "secret"; // Replace with the given clientSecret token
```
With:
```bash
        String clientId = "your_amadeus_api_key"; // Replace with the given clientId token
        String clientSecret = "your_amadeus_api_secret"; // Replace with the given clientSecret token
```

5. Now, in the terminal write the following command:
```bash
docker-compose up --build
```
6. And thats it! Now the project is running in your local!!! The frontend port is localhost:5173 and the backend port is localhost:8080
