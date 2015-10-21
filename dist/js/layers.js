(function() {
  var layerA, layerB, layerC;

  layerA = new Layer({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    image: "images/bg1.png"
  });

  layerB = new Layer({
    backgroundColor: "#ff0000",
    width: 60,
    height: 60
  });

  layerC = new VideoLayer({
    video: "images/mov1.mp4",
    width: 800,
    height: 600
  });

  layerC.player.autoplay = true;

}).call(this);
