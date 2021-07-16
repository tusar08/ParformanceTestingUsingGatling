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
        "total": "349",
        "ok": "349",
        "ko": "741"
    },
    "maxResponseTime": {
        "total": "1629",
        "ok": "1340",
        "ko": "1629"
    },
    "meanResponseTime": {
        "total": "779",
        "ok": "552",
        "ko": "1006"
    },
    "standardDeviation": {
        "total": "368",
        "ok": "312",
        "ko": "267"
    },
    "percentiles1": {
        "total": "793",
        "ok": "378",
        "ko": "911"
    },
    "percentiles2": {
        "total": "918",
        "ok": "690",
        "ko": "1121"
    },
    "percentiles3": {
        "total": "1354",
        "ok": "1097",
        "ko": "1479"
    },
    "percentiles4": {
        "total": "1574",
        "ok": "1291",
        "ko": "1599"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "1.25",
        "ko": "1.25"
    }
},
contents: {
"req_get-user-reques-a4fef": {
        type: "REQUEST",
        name: "get user request",
path: "get user request",
pathFormatted: "req_get-user-reques-a4fef",
stats: {
    "name": "get user request",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "349",
        "ok": "349",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1340",
        "ok": "1340",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "552",
        "ok": "552",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "312",
        "ok": "312",
        "ko": "-"
    },
    "percentiles1": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "percentiles2": {
        "total": "690",
        "ok": "690",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1097",
        "ok": "1097",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1291",
        "ok": "1291",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "1.25",
        "ko": "-"
    }
}
    },"req_get-user-reques-70c35": {
        type: "REQUEST",
        name: "get user request Redirect 1",
path: "get user request Redirect 1",
pathFormatted: "req_get-user-reques-70c35",
stats: {
    "name": "get user request Redirect 1",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "741",
        "ok": "-",
        "ko": "741"
    },
    "maxResponseTime": {
        "total": "1629",
        "ok": "-",
        "ko": "1629"
    },
    "meanResponseTime": {
        "total": "1006",
        "ok": "-",
        "ko": "1006"
    },
    "standardDeviation": {
        "total": "267",
        "ok": "-",
        "ko": "267"
    },
    "percentiles1": {
        "total": "911",
        "ok": "-",
        "ko": "911"
    },
    "percentiles2": {
        "total": "1121",
        "ok": "-",
        "ko": "1121"
    },
    "percentiles3": {
        "total": "1479",
        "ok": "-",
        "ko": "1479"
    },
    "percentiles4": {
        "total": "1599",
        "ok": "-",
        "ko": "1599"
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
        "total": "1.25",
        "ok": "-",
        "ko": "1.25"
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
