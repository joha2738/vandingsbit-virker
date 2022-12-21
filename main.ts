let strip = neopixel.create(DigitalPin.P1, 20, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    strip.show()
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(400)
})
