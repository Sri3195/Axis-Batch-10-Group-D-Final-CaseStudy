var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "14",
        "ok": "9",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "15",
        "ko": "14"
    },
    "maxResponseTime": {
        "total": "1274",
        "ok": "303",
        "ko": "1274"
    },
    "meanResponseTime": {
        "total": "130",
        "ok": "52",
        "ko": "269"
    },
    "standardDeviation": {
        "total": "326",
        "ok": "89",
        "ko": "502"
    },
    "percentiles1": {
        "total": "21",
        "ok": "20",
        "ko": "21"
    },
    "percentiles2": {
        "total": "27",
        "ok": "29",
        "ko": "22"
    },
    "percentiles3": {
        "total": "643",
        "ok": "194",
        "ko": "1024"
    },
    "percentiles4": {
        "total": "1148",
        "ok": "281",
        "ko": "1224"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9,
    "percentage": 64
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5,
    "percentage": 36
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.4",
        "ok": "0.9",
        "ko": "0.5"
    }
},
contents: {
"req_get-c5558": {
        type: "REQUEST",
        name: "Get",
path: "Get",
pathFormatted: "req_get-c5558",
stats: {
    "name": "Get",
    "numberOfRequests": {
        "total": "14",
        "ok": "9",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "15",
        "ko": "14"
    },
    "maxResponseTime": {
        "total": "1274",
        "ok": "303",
        "ko": "1274"
    },
    "meanResponseTime": {
        "total": "130",
        "ok": "52",
        "ko": "269"
    },
    "standardDeviation": {
        "total": "326",
        "ok": "89",
        "ko": "502"
    },
    "percentiles1": {
        "total": "21",
        "ok": "20",
        "ko": "21"
    },
    "percentiles2": {
        "total": "27",
        "ok": "29",
        "ko": "22"
    },
    "percentiles3": {
        "total": "643",
        "ok": "194",
        "ko": "1024"
    },
    "percentiles4": {
        "total": "1148",
        "ok": "281",
        "ko": "1224"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9,
    "percentage": 64
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5,
    "percentage": 36
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.4",
        "ok": "0.9",
        "ko": "0.5"
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
