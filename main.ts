Obloq.Obloq_mqtt_callback_user(function ({ message }) {
	
})
basic.showIcon(IconNames.No)
Obloq.Obloq_mqtt_setup(
SerialPin.P1,
SerialPin.P2,
"Sinesine",
"1123213abc",
"9xnfoyeGR",
"rx7BTseMgz",
"eEfwXyeMR",
Obloq.SERVERS.Global
)
basic.showIcon(IconNames.Heart)
Obloq.Obloq_mqtt_send_message("hello world!")
