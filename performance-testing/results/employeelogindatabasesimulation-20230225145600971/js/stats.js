var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "18",
        "ok": "6",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "12",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "1037",
        "ok": "1037",
        "ko": "26"
    },
    "meanResponseTime": {
        "total": "77",
        "ok": "194",
        "ko": "19"
    },
    "standardDeviation": {
        "total": "233",
        "ok": "378",
        "ko": "4"
    },
    "percentiles1": {
        "total": "19",
        "ok": "16",
        "ko": "20"
    },
    "percentiles2": {
        "total": "22",
        "ok": "55",
        "ko": "21"
    },
    "percentiles3": {
        "total": "213",
        "ok": "795",
        "ko": "25"
    },
    "percentiles4": {
        "total": "872",
        "ok": "989",
        "ko": "26"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 28
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 6
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
    "count": 12,
    "percentage": 67
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.8",
        "ok": "0.6",
        "ko": "1.2"
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
        "total": "18",
        "ok": "6",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "12",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "1037",
        "ok": "1037",
        "ko": "26"
    },
    "meanResponseTime": {
        "total": "77",
        "ok": "194",
        "ko": "19"
    },
    "standardDeviation": {
        "total": "233",
        "ok": "378",
        "ko": "4"
    },
    "percentiles1": {
        "total": "19",
        "ok": "16",
        "ko": "20"
    },
    "percentiles2": {
        "total": "22",
        "ok": "55",
        "ko": "21"
    },
    "percentiles3": {
        "total": "213",
        "ok": "795",
        "ko": "25"
    },
    "percentiles4": {
        "total": "872",
        "ok": "989",
        "ko": "26"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 28
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 6
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
    "count": 12,
    "percentage": 67
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.8",
        "ok": "0.6",
        "ko": "1.2"
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
