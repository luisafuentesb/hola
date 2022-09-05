input.onButtonPressed(Button.A, function () {
    basic.showNumber(Numero)
    Numero += 1
})
input.onButtonPressed(Button.AB, function () {
    Texto = "Sol"
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Numero)
    Numero += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(Texto)
})
let Texto = ""
let Numero = 0
Numero = 0
Texto = "Vela"
