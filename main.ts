radio.onReceivedNumber(function (receivedNumber) {
    Temperatura_recibida = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    Temperatura_recibida = input.temperature()
})
let Temperatura_recibida = 0
radio.setGroup(56)
Temperatura_recibida = input.temperature()
basic.forever(function () {
    basic.showNumber(Temperatura_recibida)
    basic.showString("C ")
})
