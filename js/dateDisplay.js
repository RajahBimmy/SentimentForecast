function displayTime(lastMessage) {
  var currentDate = new Date();
  var rawHours = currentDate.getHours();
  var minutes = checkTime(currentDate.getMinutes());
  var seconds = checkTime(currentDate.getSeconds());
  var hours = checkTime(rawHours);
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

  d3.select("#greeting").selectAll("h1").remove();
  d3.select("#greeting").selectAll("h2").remove();
  d3.select("#greeting").append("h2").html(timedMessage);
  d3.select("#greeting").append("h1").html(hours + ":" + minutes + ":" + seconds);

  var t = setTimeout(displayTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


displayTime();
