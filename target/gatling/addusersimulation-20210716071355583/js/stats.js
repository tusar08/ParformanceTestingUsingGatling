var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "509"
    },
    "maxResponseTime": {
        "total": "1087",
        "ok": "393",
        "ko": "1087"
    },
    "meanResponseTime": {
        "total": "500",
        "ok": "338",
        "ko": "661"
    },
    "standardDeviation": {
        "total": "221",
        "ok": "18",
        "ko": "214"
    },
    "percentiles1": {
        "total": "451",
        "ok": "331",
        "ko": "561"
    },
    "percentiles2": {
        "total": "561",
        "ok": "336",
        "ko": "561"
    },
    "percentiles3": {
        "total": "1087",
        "ok": "368",
        "ko": "1087"
    },
    "percentiles4": {
        "total": "1087",
        "ok": "388",
        "ko": "1087"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "5",
        "ko": "5"
    }
},
contents: {
"req_add-user-reques-46550": {
        type: "REQUEST",
        name: "add user request",
path: "add user request",
pathFormatted: "req_add-user-reques-46550",
stats: {
    "name": "add user request",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "338",
        "ok": "338",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles1": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles2": {
        "total": "336",
        "ok": "336",
        "ko": "-"
    },
    "percentiles3": {
        "total": "368",
        "ok": "368",
        "ko": "-"
    },
    "percentiles4": {
        "total": "388",
        "ok": "388",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
}
    },"req_add-user-reques-d6040": {
        type: "REQUEST",
        name: "add user request Redirect 1",
path: "add user request Redirect 1",
pathFormatted: "req_add-user-reques-d6040",
stats: {
    "name": "add user request Redirect 1",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "509",
        "ok": "-",
        "ko": "509"
    },
    "maxResponseTime": {
        "total": "1087",
        "ok": "-",
        "ko": "1087"
    },
    "meanResponseTime": {
        "total": "661",
        "ok": "-",
        "ko": "661"
    },
    "standardDeviation": {
        "total": "214",
        "ok": "-",
        "ko": "214"
    },
    "percentiles1": {
        "total": "561",
        "ok": "-",
        "ko": "561"
    },
    "percentiles2": {
        "total": "561",
        "ok": "-",
        "ko": "561"
    },
    "percentiles3": {
        "total": "1087",
        "ok": "-",
        "ko": "1087"
    },
    "percentiles4": {
        "total": "1087",
        "ok": "-",
        "ko": "1087"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "-",
        "ko": "5"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
