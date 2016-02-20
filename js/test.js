d3.selectAll("h1").style("color", "white");

d3.json("sentimentParsed.json", function(data) {

  var sortedData = data.sort(function(a,b) {
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

  for(var i = 0; i < sortedData.length; i++){
    d3.select("#potato").append("p").append("b").html(sortedData[i].DateString + " | " + sortedData[i].DocSentiment.Type + " | " + sortedData[i].Data.Responses);
    // Responses | Text | Type
  }

});
