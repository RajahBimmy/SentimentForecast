d3.selectAll("h1").style("color", "white");

d3.json("sentimentParsed.json", function(data) {

  var dataSortedByDate = data.sort(function(a,b) {
    for(var i = 0; i < 3; i++) {
      if(a.DateArray[i] > b.DateArray[i]) {
        return 1;
      }
      if (a.DateArray[i] < b.DateArray[i]) {
        return -1;
      }
    }
    return 0;
  });

  var dateMap = [];
  var dateNames = [];

  for(var i = 0; i < dataSortedByDate.length; i++) {
    var tempArray = dataSortedByDate[i].DateArray;
    var dateString = tempArray[0] + "-" + tempArray[1] + "-" + tempArray[2];
    if(dateString in dateMap) {
      // First, check to make sure the responses actually have a count, and aren't undefined.
      // If they are, insert at the back.
      if(isNaN(dataSortedByDate[i].Data.Responses)){
        dateMap[dateString].push(dataSortedByDate[i]);
        continue;
      }

      // Traverse array, inserting where the response count is lower in the next element.
      var inserted = false;
      for(var j = 0; j < dateMap[dateString].length; j++) {
        if (dataSortedByDate[i].Data.Responses > dateMap[dateString][j].Data.Responses){
          dateMap[dateString].splice(j, 0, dataSortedByDate[i]);
          inserted = true;
          break;
        }
      }

      // If not inserted earlier, push now.
      if(!inserted) {
        dateMap[dateString].push(dataSortedByDate[i]);
      }

    } else {
      dateNames.push(dateString);
      dateMap[dateString] = [];
      dateMap[dateString].push(dataSortedByDate[i]);
    }
  }

  //d3.select("#potato").append("p").append("b").html(dataSortedByDate[i].DateString + " | " + dataSortedByDate[i].DocSentiment.Type + " | " + sortedData[i].Data.Type);
  // Responses | Text | Type

  for(var i = 0; i < dateNames.length; i++) {
    var entries = dateMap[dateNames[i]];
    for(var j = 0; j < entries.length; j++) {
      d3.select("#potato").append("p").append("b").html(entries[j].DateString + " | " + entries[j].DocSentiment.Type + " | " + entries[j].Data.Responses);
    }
  }
});
