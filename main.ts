radio.onReceivedStringDeprecated(function (value) {
    list[_in] = value
    _in = _in + 1
})
let num = 0
let cmd = ""
let list: string[] = []
let _in = 0
radio.setGroup(1)
_in = 0
let out = 0
let move = 160
let turn = 80
basic.forever(function () {
    if (out < _in) {
        cmd = list[out].substr(0, 1)
        num = parseFloat(list[out].substr(1, list[out].length - 1))
        out = out + 1
        if (cmd == "F") {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, move)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, move)
            if (0 < num) {
                basic.pause(num)
                motor.motorStopAll()
            }
        } else if (cmd == "B") {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, move)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, move)
            if (0 < num) {
                basic.pause(num)
                motor.motorStopAll()
            }
        } else if (cmd == "R") {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, turn)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, turn)
            if (0 < num) {
                basic.pause(num)
                motor.motorStopAll()
            }
        } else if (cmd == "L") {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, turn)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, turn)
            if (0 < num) {
                basic.pause(num)
                motor.motorStopAll()
            }
        } else if (cmd == "M") {
            move = num
        } else if (cmd == "T") {
            turn = num
        } else {
            motor.motorStopAll()
        }
    } else {
        basic.pause(100)
    }
})
