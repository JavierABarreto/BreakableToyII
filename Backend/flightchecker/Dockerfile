FROM eclipse-temurin:21
WORKDIR /backend
COPY . .
RUN ./gradlew build
ENTRYPOINT ["java","-jar","build/libs/flightchecker-0.0.1-SNAPSHOT.jar"]