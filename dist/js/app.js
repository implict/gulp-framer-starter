(function() {
  var layerA, layerB, layerC, maxH, play, w;

  Framer.Defaults.Layer.backgroundColor = "red";

  w = 100;

  maxH = 400;


  /*
  ===================== init layer =====================
   */

  layerA = new Layer({
    name: "Layer A",
    midX: Screen.width / 4
  });

  layerB = new Layer({
    name: "Layer B",
    midX: Screen.width / 4 * 2
  });

  layerC = new Layer({
    name: "Layer C",
    midX: Screen.width / 4 * 3
  });

  layerA.centerY();

  layerB.centerY();

  layerC.centerY();


  /*
  ===================== event handler =====================
   */

  layerA.on(Events.AnimationStart, function() {});

  layerA.on(Events.AnimationStop, function() {});

  layerA.on(Events.AnimationEnd, function() {
    return play();
  });

  layerA.on(Events.Click, function(event, layer) {});

  layerA.on("change:height", function() {
    layerA.centerY();
    layerB.centerY();
    return layerC.centerY();
  });

  $(window).resize(function() {
    layerA.midX = Screen.width / 4;
    layerB.midX = Screen.width / 4 * 2;
    return layerC.midX = Screen.width / 4 * 3;
  });


  /*
  ===================== init animation =====================
   */

  play = function() {
    var animationA, animationB, animationC;
    animationA = new Animation({
      layer: layerA,
      properties: {
        width: w,
        height: Utils.round(Utils.randomNumber(20, maxH), 0)
      },
      time: 0.5,
      curve: "spring(100, 10, 0)"
    });
    animationB = new Animation({
      layer: layerB,
      properties: {
        width: w,
        height: Utils.round(Utils.randomNumber(20, maxH), 0)
      },
      time: 0.5,
      curve: "spring(100, 10, 0)"
    });
    animationC = new Animation({
      layer: layerC,
      properties: {
        width: w,
        height: Utils.round(Utils.randomNumber(20, maxH), 0)
      },
      time: 0.5,
      curve: "spring(100, 10, 0)"
    });
    return Utils.delay(0.8, function() {
      animationA.start();
      animationB.start();
      return animationC.start();
    });
  };


  /*
  ===================== execute animation =====================
   */

  play();

}).call(this);
