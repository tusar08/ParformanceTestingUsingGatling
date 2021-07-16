package Simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class AddUserSimulation extends Simulation {

  val httpConf = http.baseUrl(url = "http://reqres.in")
    .header(name = "Accept" , value = "application/json")
    .header(name = "content-type", value = "application/json")


  val scn = scenario(scenarioName = "Add User Scenario")
    .exec(http(requestName = "add user request")
      .post(url = "/api/users")
      .body(RawFileBody(filePath = "./src/test/resources/Bodies/postrequestbody.json")).asJson
      .check(status is 200))

    .pause(duration = 3)

    .exec(http(requestName = "get user request")
      .get("/api/users/2")
      .check(status is 200)

    )




  setUp(scn.inject(atOnceUsers(users = 10))).protocols(httpConf)




}
