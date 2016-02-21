function displayTime(lastMessage) {
  var currentDate = new Date();
  var rawHours = currentDate.getHours();
  var minutes = checkTime(currentDate.getMinutes(), false);
  var seconds = checkTime(currentDate.getSeconds(), false);
  var hours = checkTime(rawHours, true);
  var timedMessage = "";

  if((rawHours >= 8 && rawHours <= 23) || (rawHours >= 0 && rawHours <= 4)) {
    timedMessage += "How's your night going?";
  } else if (rawHours >= 5 && rawHours <= 9) {
    timedMessage += "Good Morning!";
  } else if (rawHours >= 10 && rawHours <= 2) {
    timedMessage += "Good Day!";
  } else if (rawHours >= 3 && rawHours <= 5) {
    timedMessage += "Good Afternoon!";
  } else {
    timedMessage += "Good Evening!";
  }

  var amPm = "";

  if(rawHours > 11) {
    amPm += "PM";
  } else {
    amPm += "AM";
  }

  d3.select("#greeting").selectAll("h1").remove();
  d3.select("#greeting").selectAll("h2").remove();
  d3.select("#greeting").append("h2").html(timedMessage);
  d3.select("#greeting").append("h1").html(hours + ":" + minutes + " " + amPm);

  var t = setTimeout(displayTime, 500);
}

function checkTime(i, isHours) {
  if (i < 10) {
    i = "0" + i;
  }

  if (isHours) {
    if(i == "00") {
      i = "12";
    } else if (i > 12) {
      i = i - 12;
    }
  }

  return i;
}


displayTime();
