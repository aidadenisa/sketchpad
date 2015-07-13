function creatingTheCanvas() {
  $("#canvas").empty();
  var h = prompt("Please insert height");
  var w = prompt("Please insert width");
  var canv=document.getElementById("canvas");
  for (var i=0; i< w ; i++) {
    for (var j=0; j< h; j++) {
      var newSquare = document.createElement("div");
      newSquare.className="square";
      canv.appendChild(newSquare);
    }
    canv.appendChild(document.createElement("BR"));
  }

  $(".square").mouseenter(function() {
    $(this).css("background-color","#D3D3D3");
  });
}
