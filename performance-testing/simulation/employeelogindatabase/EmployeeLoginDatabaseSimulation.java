package employeelogindatabase;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import java.util.concurrent.ThreadLocalRandom;


public class EmployeeLoginDatabaseSimulation extends Simulation {
 
    ChainBuilder user =
        // Let's try at max 2 times
        tryMax(2)
            .on(
               exec(
                        http("Get")
                            .get("/login/fetch")                           
                            .check(
                                status().is(
                                    // We do a check on a condition that's been customized with
                                    // a lambda. It will be evaluated every time a user executes
                                    // the request.
                                    session -> 200 + ThreadLocalRandom.current().nextInt(2)
                                )
                            )
                    )
            )
            // If the chain didn't finally succeed, have the user exit the whole scenario
            .exitHereIfFailed();

    HttpProtocolBuilder httpProtocol =
        http.baseUrl("http://localhost:4000/")
            .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
            .acceptLanguageHeader("en-US,en;q=0.5")
            .acceptEncodingHeader("gzip, deflate")
            .userAgentHeader(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0"
            );

    ScenarioBuilder users = scenario("Users").exec(user);   

    {
        setUp(
            users.injectOpen(rampUsers(10).during(10))           
        ).protocols(httpProtocol);
    }
}
