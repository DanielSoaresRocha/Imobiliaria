FROM openjdk:11.0.6-jre-slim

RUN mkdir -p /app
COPY target/backend-0.0.1-SNAPSHOT.jar /app/app.jar
WORKDIR /app

CMD ["sh", "-c", "java -Dspring.profiles.active=$JAVA_ENV -jar app.jar"]
