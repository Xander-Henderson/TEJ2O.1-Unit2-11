/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Oct 2025
 * This program shows a random number between 0 and 99
*/

// setup
let randomNumberOne: number = 0
let randomNumberTwo: number = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// chose the random numbers
randomNumberOne = randint(0, 99)
randomNumberTwo = randint(0, 99)

// show number 1
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showNumber(randomNumberOne)
    basic.clearScreen()
})

// show number 2
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(randomNumberTwo)
    basic.clearScreen()
})

// show either one
input.onGesture(Gesture.Shake, function() {
    if (randomNumberOne > randomNumberTwo) {
        basic.clearScreen()
        basic.showNumber(randomNumberOne)
        basic.clearScreen()
    } else {
        basic.clearScreen()
        basic.showNumber(randomNumberTwo)
        basic.clearScreen()
    }
})
