package Simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TestAPIsimulation extends Simulation{

  //http conf
  val httpConf =  http.baseUrl(url="https://productcatalog-e2e.platform.intuit.com")
    .header(name = "Accept" , value = "*/*" )
    .header(name = "Accept-Encoding" , value = "gzip, deflate, br" )
    .header(name = "Connection" , value = "keep-alive" )
    .header(name = "Authorization" , value = "Intuit_IAM_Authentication intuit_appid=Intuit.platform.ebseasqaservicestestframework.ebseasqatestclient,intuit_app_secret=preprdxVL2dCN3bFgsEeN0YFgdTKaG9tzB2kEkdw" )
    .header(name = "Accept" , value = "application/json" )
    .header(name = "intuit_tid" , value = "ktf-ea844def-e9e7-459b-bdd4-1d2252ef052y" )
    .header(name = "intuit_webs_tbt" , value = "TBT676_AWS" )
    .header(name = "intuit_assetalias" , value = "Intuit.platform.ebseasqaservicestestframework.ebseasqatestclient" )
    .header(name = "intuit_locale" , value = "en_US" )
    .header(name = "Content-Type" , value = "application/json" )
    .header(name = "intuit_originatingip" , value = "10.146.7.61" )

  //scenario
  val scn = scenario(scenarioName = "get offer" )
    .exec(http(requestName = "get offer details")
      .get("/v3/offers/30013037?refresh-cache=true")
      .check(status is 200)
    )
  //setup
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)





}
