input.onGesture(Gesture.Shake, function () {
    Mood = 2
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
let Mood = 0
basic.showString("How are you feeling today?")
basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.Asleep)
basic.showIcon(IconNames.Sad)
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
