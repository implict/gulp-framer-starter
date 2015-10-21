Framer.Defaults.Layer.backgroundColor = "red"
#Framer.Defaults.Layer.borderRadius = 50;

w = 100
maxH = 400

###
===================== init layer =====================
###
layerA = new Layer
    name: "Layer A"
    midX: Screen.width/4

layerB = new Layer
    name: "Layer B"
    midX: Screen.width/4 * 2

layerC = new Layer
    name: "Layer C"
    midX: Screen.width/4 * 3

layerA.centerY()
layerB.centerY()
layerC.centerY()

#Utils.labelLayer(layerA, "A")

###
===================== event handler =====================
###

layerA.on Events.AnimationStart, ->
    #print "Animation started"

layerA.on Events.AnimationStop, ->
    #print "Animation stopped"

layerA.on Events.AnimationEnd, ->
    play()
    #print "Animation ended"

layerA.on Events.Click, (event, layer) ->
    #print "This layer was clicked", layer.name

layerA.on "change:height", ->
    layerA.centerY()
    layerB.centerY()
    layerC.centerY()
    #print layerA.height

# watch screen resize using jquery
$(window).resize ->
    layerA.midX = Screen.width/4
    layerB.midX = Screen.width/4 * 2
    layerC.midX = Screen.width/4 * 3
    #print "Screen was resized"

###
===================== init animation =====================
###

play = ->
    #w = Utils.round(Utils.randomNumber(20, 100), 0)

    animationA = new Animation
        layer: layerA
        properties:
            width: w
            height: Utils.round(Utils.randomNumber(20, maxH), 0)
        time: 0.5
        curve: "spring(100, 10, 0)"

    animationB = new Animation
        layer: layerB
        properties:
            width: w
            height: Utils.round(Utils.randomNumber(20, maxH), 0)
        time: 0.5
        curve: "spring(100, 10, 0)"

    animationC = new Animation
        layer: layerC
        properties:
            width: w
            height: Utils.round(Utils.randomNumber(20, maxH), 0)
        time: 0.5
        curve: "spring(100, 10, 0)"

    Utils.delay 0.8, ->
        #layerA.backgroundColor = Utils.randomColor(1)
        animationA.start()
        animationB.start()
        animationC.start()

    #print 'play animation'

###
===================== execute animation =====================
###

play()
