// var createLi = $("<li>");
// var createP = $("<p>");

var now = moment().format("dddd MMMM, Do");
$("#currentDay").text(now);

var currentHour = parseInt(moment().format('H')) //currentHour will be an integer from 0 to 23

for(var i = 9; i < 18; i++) {
  var elem = $('#hour-' + i)
  if (i < currentHour) {
     //give elem the past class
     elem.addClass("past");
  } else if (i === currentHour) {
     //give elem the present class
     elem.addClass("present");
  } else {
     //give elem the future class
     elem.addClass("future");
  }
}

var saveEvent = function() {
   console.log($(this).siblings("textarea").val());
   var textBox = $(this).siblings("textarea").val();
   var textBoxID = $(this).siblings(".description").attr("id");
   localStorage.setItem(textBoxID, textBox);
}

$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-13").val(localStorage.getItem("hour-13"));
$("#hour-14").val(localStorage.getItem("hour-14"));
$("#hour-15").val(localStorage.getItem("hour-15"));
$("#hour-16").val(localStorage.getItem("hour-16"));
$("#hour-17").val(localStorage.getItem("hour-17"));


$(".saveBtn").on("click", saveEvent)