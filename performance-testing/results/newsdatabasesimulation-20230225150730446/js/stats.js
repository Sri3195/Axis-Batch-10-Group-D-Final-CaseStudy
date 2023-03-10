var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "13",
        "ok": "8",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "11",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "543",
        "ok": "543",
        "ko": "28"
    },
    "meanResponseTime": {
        "total": "58",
        "ok": "83",
        "ko": "18"
    },
    "standardDeviation": {
        "total": "140",
        "ok": "174",
        "ko": "6"
    },
    "percentiles1": {
        "total": "17",
        "ok": "17",
        "ko": "16"
    },
    "percentiles2": {
        "total": "23",
        "ok": "24",
        "ko": "21"
    },
    "percentiles3": {
        "total": "234",
        "ok": "363",
        "ko": "27"
    },
    "percentiles4": {
        "total": "481",
        "ok": "507",
        "ko": "28"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 62
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
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.444",
        "ok": "0.889",
        "ko": "0.556"
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
        "total": "13",
        "ok": "8",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "11",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "543",
        "ok": "543",
        "ko": "28"
    },
    "meanResponseTime": {
        "total": "58",
        "ok": "83",
        "ko": "18"
    },
    "standardDeviation": {
        "total": "140",
        "ok": "174",
        "ko": "6"
    },
    "percentiles1": {
        "total": "17",
        "ok": "17",
        "ko": "16"
    },
    "percentiles2": {
        "total": "23",
        "ok": "24",
        "ko": "21"
    },
    "percentiles3": {
        "total": "234",
        "ok": "363",
        "ko": "27"
    },
    "percentiles4": {
        "total": "481",
        "ok": "507",
        "ko": "28"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 62
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
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.444",
        "ok": "0.889",
        "ko": "0.556"
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
