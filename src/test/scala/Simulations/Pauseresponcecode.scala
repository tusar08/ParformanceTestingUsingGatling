package Simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt
class PusetimeResponceCode extends Simulation{

  val httpConf = http.baseUrl(url = "https://reqres.in/")
    .header(name = "Accept", value =  "application/json")

  val scn = scenario(scenarioName = "user api call")
    .exec(http(requestName = "list all users")
      .get("api/users?page=2")
      .check(status.is(expected = 200)))
    .pause(duration = 5)

    .exec(http(requestName = "single user")
      .get("api/users/2")
      .check(status.in(expected =  200 to 210)))
    .pause(1,10)

    .exec(http(requestName = "single user not found")
      .get("api/users/23")
      .check(status.not(expected = 400),status.not(expected = 500)))
    .pause(3000.milliseconds)

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}

