function isCircular(array) {
  if (array.length == 0){
    // wildcard
    return true;
  }

  var checkArray = [array.length];

  checkArray.fill(false);

  var j = 0;

  while(true) {
    if(checkArray[j])
      break;

    checkArray[j] = true;
    var current = array[array[j]];
    if (current > array.length - 1) {
      // calculation for jumping back to start of array.
      var offset = current - array.length;
      j = offset;
    } else {
      j = current;
    }
  }

  for(var i = 0; i < checkArray; i++) {
    if (!checkArray[i]) {
      return false;
    }
  }
  return true;
}
