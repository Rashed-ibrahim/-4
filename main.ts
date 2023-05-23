input.onButtonPressed(Button.A, function () {
    Num_1 += 1
    basic.showNumber(Num_1)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(Num_1 + Num_2)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(Num_1 * Num_2)
})
input.onButtonPressed(Button.B, function () {
    Num_2 += 1
    basic.showNumber(Num_2)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(Num_1 / Num_2)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(Num_1 - Num_2)
})
let Num_2 = 0
let Num_1 = 0
Num_1 = 0
Num_2 = 0
