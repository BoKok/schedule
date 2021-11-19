// var createLi = $("<li>");
// var createP = $("<p>");

var now = moment().format("dddd MMMM, Do");
$("#currentDay").text(now);

var currentHour = moment().format('h A')

JSON.stringify(currentHour)
console.log(currentHour)
//time
var time9 = $("#8AM")
            .text();
if (moment().isAfter(moment(time9, 'h A'))) {
    $("#8AMF").addClass("past");
  } else if (moment().isBefore(moment(time9, 'h A'))) {
    $("#8AMF").addClass("future");
  } else if (currentHour === time9) {
    $("8AMF").addClass("present");
  }
  var time = $("#10AM")
            .text();
if (moment().isAfter(moment(time, 'h A'))) {
    $("#10AMF").addClass("past");
  } else if (moment().isBefore(moment(time, 'h A'))) {
    $("#10AMF").addClass("future");
  }
  var time = $("#11AM")
            .text();
if (moment().isAfter(moment(time, 'h A'))) {
    $("#11AMF").addClass("past");
  } else if (moment().isBefore(moment(time, 'h A'))) {
    $("#11AMF").addClass("future");
  }
  var time = $("#12PM")
            .text();
if (moment().isAfter(moment(time, 'h A'))) {
    $("#12PMF").addClass("past");
  } else if (moment().isBefore(moment(time, 'h A'))) {
    $("#12PMF").addClass("future");
  } else {
    $("#12AMF").addClass("present");
  }

  var time1 = $("#1PM")
            .text();
if (moment('h A') === (time1)) {
  $("#1PMF").addClass("present");
}
console.log(moment('h A'))
  var time = $("#2PM")
            .text();
if (moment().isAfter(moment(time, 'h A'))) {
    $("#2PMF").addClass("past");
  } else if (moment().isBefore(moment(time, 'h A'))) {
    $("#2PMF").addClass("future");
  }
  var time = $("#3PM")
            .text();
if (moment().isAfter(moment(time, 'h A'))) {
    $("#3PMF").addClass("past");
  } else if (moment().isBefore(moment(time, 'h A'))) {
    $("#3PMF").addClass("future");
  }
  var time = $("#4PM")
            .text();
if (moment().isAfter(moment(time, 'h A'))) {
    $("#4PMF").addClass("past");
  } else if (moment().isBefore(moment(time, 'h A'))) {
    $("#4PMF").addClass("future");
  }
  var time = $("#5PM")
            .text();
if (moment().isAfter(moment(time, 'h A'))) {
    $("#5PMF").addClass("past");
  } else if (moment().isBefore(moment(time, 'h A'))) {
    $("#5PMF").addClass("future");
  }


var timeCheck = function(){
    timeCheck = moment().format("h A");
console.log(timeCheck);
}

var hour = moment(time, "h A")

console.log(time1)

