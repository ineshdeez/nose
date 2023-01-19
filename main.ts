input.onButtonPressed(Button.A, function () {
    numero += 1
    basic.showNumber(numero)
})
input.onButtonPressed(Button.AB, function () {
    if (numero > 5) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
})
let numero = 0
numero = 0
basic.showNumber(numero)
basic.forever(function () {
	
})
