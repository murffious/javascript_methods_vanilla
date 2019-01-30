var filter = function(arr, cb){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    var cbOutput = cb(arr[i]);
    if(cbOutput){
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}
