//import * as mqtt from "mqtt"

export function mqtt_return(msg) {
    const mqtt = require('mqtt')
    const client = mqtt.connect('mqtt://127.0.0.1')

    client.on('connect', function () {
        client.subscribe('presence', function (err) {
            if (!err) {
                client.publish('presence', msg)
            }
        })
    })

    client.on('message', function (topic, message) {
        // message is Buffer
        console.log(message.toString())
        client.end()
    })
}

