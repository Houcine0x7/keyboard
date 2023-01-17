pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P11, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P5, 0)
pins.setPull(DigitalPin.P16, PinPullMode.PullDown)
pins.setPull(DigitalPin.P15, PinPullMode.PullDown)
pins.setPull(DigitalPin.P14, PinPullMode.PullDown)
pins.setPull(DigitalPin.P13, PinPullMode.PullDown)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    while (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("A")
    }
    while (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(3)
    }
    while (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(2)
    }
    while (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(1)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
    while (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("B")
    }
    while (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(6)
    }
    while (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(5)
    }
    while (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(4)
    }
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    while (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("C")
    }
    while (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(9)
    }
    while (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(8)
    }
    while (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(7)
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P5, 1)
    while (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("D")
    }
    while (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showString("#")
    }
    while (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(0)
    }
    while (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("*")
    }
    pins.digitalWritePin(DigitalPin.P5, 0)
    basic.pause(20)
})
