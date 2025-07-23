input.onButtonPressed(Button.A, function () {
    La_alarma_esta_activada = true
    basic.showString("La alarma esta activada")
})
input.onButtonPressed(Button.AB, function () {
    if (La_alarma_esta_activada && La_puerta_está_abierta) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    La_puerta_está_abierta = true
    basic.showString("La puerta esta abierta")
})
let La_alarma_esta_activada = false
let La_puerta_está_abierta = false
La_puerta_está_abierta = false
La_alarma_esta_activada = false
