input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Fabulous)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
