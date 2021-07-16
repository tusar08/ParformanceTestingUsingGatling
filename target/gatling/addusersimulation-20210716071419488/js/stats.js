var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1438",
        "ok": "1438",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "763",
        "ok": "763",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "percentiles1": {
        "total": "448",
        "ok": "448",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1322",
        "ok": "1322",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1337",
        "ok": "1337",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1418",
        "ok": "1418",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.667",
        "ok": "6.667",
        "ko": "-"
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
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "500",
        "ok": "500",
        "ko": "-"
    },
    "percentiles1": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1327",
        "ok": "1327",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1330",
        "ok": "1330",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
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
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1438",
        "ok": "1438",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "699",
        "ok": "699",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "387",
        "ok": "387",
        "ko": "-"
    },
    "percentiles1": {
        "total": "448",
        "ok": "448",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1031",
        "ok": "1031",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1333",
        "ok": "1333",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1417",
        "ok": "1417",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
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
