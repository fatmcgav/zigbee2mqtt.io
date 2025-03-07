const notes = [
    {
        model: 'ZNLDP12LM',
        note: `
### Pairing
Switch the lamp on five times until the bulb blinks several times.
`,
    },
    {
        model: 'E1525',
        note: `
### Pairing
Pair the sensor to Zigbee2mqtt by pressing the pair button 4 times in a row.
The red light on the front side should flash a few times and the turn off.
After a few seconds it turns back on and pulsate. When connected, the light turns off.
`,
    },
    {
        model: 'E1743',
        note: `
### Pairing
Pair the switch to Zigbee2mqtt by pressing the pair button (found under the back cover next to the battery)
4 times in a row. The red light on the front side should flash a few times and the turn off
(it's more visible to see the light from the back). After a few seconds it turns back on and pulsate.
When connected, the light turns off.
`,
    },
    {
        model: 'E1743',
        note: `
### Binding
The E1743 can be bound to groups using [binding](../information/binding).
It can only be bound to 1 group at a time.

Note that < zigbee2mqtt 1.4 automatically bound this device to group 99.
If you want to bind it to a different group you first have to unbind it from group 99.
`,
    },
    {
        model: 'ZYCT-202',
        note: `
### Pairing
Factory reset the remote by holding the 0 (off) button for +-20 seconds.
To establish a connection keep the remote within 2 meters from the hub.
Press and hold the smart group button (button with two bulbs) and wait until the lights, below the channels, flash.
`,
    },
    {
        model: 'ZCTS-808',
        note: `
### Pairing
When pairing the sensor with Zigbee2MQTT,
keep opening and closing the sensor (pull/insert the sensor parts next to eachother) for 10 seconds,
otherwise device will fall asleep before it gets fully configured and will not send state changes.
`,
    },
    {
        model: 'PP-WHT-US',
        note: `
### Pairing
Additional steps are required because the Peanut Smart Plug does not provide a \`modelId\` in its database entry,
and thus zigbee2mqtt cannot identify the product or how to handle it.

Reset the device and initiate pairing mode by holding the pairing button
(the small button next to the on/off button) for ten seconds, releasing the button,
and unplugging the device.
When plugged back in, the front LED will be blinking red and ready to receive a pairing request.
When paired successfully, the red LED on the plug will stop blinking.

After pairing, you must stop zigbee2mqtt and manually edit the zigbee2mqtt \`database.db\` file with a
text editor (note that the file may be owned by root).
Find each line where the Peanut Smart Plug is listed (look for "SecuriFi Ltd." in the \`ManufName\` field)
and **add** \`"modelId":"PP-WHT-US",\` between two existing fields.

*For example,* change \`..."manufId":4098,"manufName":"Securifi Ltd....\`
to \`..."manufId":4098,"modelId":"PP-WHT-US","manufName":"Securifi Ltd....\`
on each line for the device.

Save the file and restart zigbee2mqtt.
`,
    },
    {
        vendor: 'Gledopto',
        note: `
### Pairing
1. Switch on your device.
2. Now switch off and on within 2 seconds.
3. Repeat off/on four times.
4. Reset is done when the device is switched on in the fifth time and the light stays on after blinking 4 times
`,
    },
    {
        model: 'Z809A',
        note: `
### Pairing
Factory reset by:
- Press and hold the Binding Key for 15 seconds. The network indicator will flash green 3 times
(at the 3rd, the 10th, and the 15th second).
- After releasing the Binding Key, press the Switch Key within 2 seconds. The network indicator
will rapidly flash green.
- After fast flashes, Z809A will reboot, and the restore is completed. The socket will automatically connect now.
`,
    },
    {
        model: '4713407',
        note: `
### Pairing
1. Turn bulb on.
2. Turn power off for 2 seconds.
3. Turn power on for 1 second.
4. Repeat turning off and turning on six times.
5. Bulb will flash and is now reset.
`,
    },
    {
        model: 'PLUG EDP RE:DY',
        note: `
### Pairing
Factory reset the plug (hold the switch button for >10sec). After resetting the switch will automatically connect.
`,
    },
    {
        model: 'AC0251100NJ',
        note: `
### Pairing
For the OSRAM Smart+ Switch Mini (AC0251100NJ) hold the Middle and Arrow Down Buttons for 10 Seconds
to Reset the Device. Hold the Middle and Arrow Up Buttons for 3 Seconds to connect.
If the Switch is connected hold Middle and Arrow Up Buttons for 3 Seconds to disconnect.
`,
    },
    {
        model: 'AB3257001NJ',
        note: `
### Pairing
For the OSRAM Smart+ plug (AB3257001NJ) hold the on/off button until your hear a click (+- 10 seconds).
`,
    },
    {
        model: ['ZLED-2709'],
        note: `
### Pairing
After a factory reset the bulb will automatically connect.

Power on and off the bulb 5 times (screw/uscrew the bulb if you don't have a physical switch)
to perform a factory reset.
As a reset confirmation the bulb will blink 4 times.
`,
    },
    {
        model: [
            '4058075816718', 'AA69697', 'AC03645', 'AC03642', 'AA70155', 'AA68199', 'AB32840', '4058075816794',
            'AC03641', '4052899926158', 'AB401130055', 'AB35996', 'AC08562', 'AC03648',
        ],
        /* eslint-disable */
        note: `
### Pairing
Follow instruction from [Manual reset](http://belkin.force.com/Articles/articles/en_US/Troubleshooting_and_Tutorials/Resetting-the-OSRAM-LIGHTIFY-Tunable-White-60-Bulb#a).
After resetting the bulb will automatically connect.
`,
        /* eslint-enable */
    },
    {
        model: ['HALIGHTDIMWWE27', 'HALIGHTDIMWWB22'],
        /* eslint-disable */
        note: `
### Pairing
Follow instructions from
[How do I reset my Hive Active Light?](https://www.hivehome.com/ca/support/Help_installing_Hive/HIH_Hive_Active_Light/How-do-I-reset-my-Hive-Active-Light). After resetting the bulb will automatically connect.
`,
        /* eslint-enable */
    },
    {
        model: ['7199960PH', '7299760PH'],
        note: `
### Pairing
Philips LivingColors IRIS and Philips LivingColors Bloom Devices that comes with
Philips (HUE) Remote Gen 2 (Touch Wheel) or Gen 3 (Round Click Wheel) can be paired via Zigbee.
Devices with Gen 1 Remote don't use Zigbee and can not be paired.
The Philips LivingColors Remote can not be paired via Zigbee because it only support ZigBee Light Link (ZLL).

To Pair hold Button ON and Bottom Left Key (Favorite 1) on the Remote in Front of the Device until
the Device Light blinks and lights Orange. If connection was succesfull the Device Light will light Green.

**WARNING**: If you pair your Device to a Zigbee Network which is not using a ZLL Channel
you can't reset the Device with the Philips LivingColors Remote Gen 3.
The Gen 3 Remote will only try ZLL Channels to find the Device! Maybe it's possible to reset
the Device with a Philips LivingColors Remote Gen 2 as it should try all Zigbee Channels to find the Device.

[Philips LivingColors Bloom Manual](https://www.download.p4c.philips.com/files/7/7099760pu/7099760pu_dfu_eng.pdf)

[Philips LivingColors Iris Manual](https://www.download.p4c.philips.com/files/7/7099930ph/7099930ph_dfu_eng.pdf)
`,
    },
    {
        vendor: 'Philips',
        notModel: ['324131092621'],
        supports: ['brightness'],
        note: `
### Pairing
Factory resetting a Hue bulb can be accomplished in 3 ways.
After resetting the bulb will automatically connect.

**Hue bridge**
When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb
by removing it from the bridge via the Hue app.

**Hue dimmer switch**
[VIDEO: Factory reset a Hue bulb with Hue dimmer switch](https://www.youtube.com/watch?v=qvlEAELiJKs).

**TRADFRI remote control**
This may also be possible with the
[Tradfri Remote Control](https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG)
by pressing and holding the reset button on the bottom of the remote (next to the battery).
[This may not always work](https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751).
`,
    },
    {
        vendor: 'Philips',
        notModel: ['324131092621'],
        supports: ['brightness'],
        note: `
### Power-on behavior
Allows to set the power-on behavior of the bulb.
Note that this requires at least November/December '18 firmware update of the bulb.
\`\`\`js
{
    "hue_power_on_behavior": "on",          //default, on, off, recover, default = on
    "hue_power_on_brightness": 125,         //default, same values as brightness, default = 255
    "hue_power_on_color_temperature": 280,  //default, same values as color_temp, default = 366
}
\`\`\`

Attribute Value | Description
----------------|-----------------------------------------------
default         | reset to factory default value
on              | lamps on after power loss with configured brightness, color-temperature, color (to-do)
off             | lamps off after power loss
recover         | last running state after power loss
`,
    },
    {
        vendor: ['OSRAM', 'Sylvania'],
        notModel: [],
        supports: ['brightness'],
        note: `
### Set default power on/off transition
Various Osram/Sylvania LED support setting a default transition when turning a light on and off.
\`\`\`js
{
    "osram_set_transition": 0.1,            //time in seconds (integer or float)
}
\`\`\`

### Remember current light state
Various Osram/Sylvania LED support remembering their current state in case of power loss, or if a light
is manually switched off then on. Lights will remember their respective attributes
(i.e. brightness, color, saturation, etc.).
NOTE: This must be executed everytime you make changes to a light's attributes for it to then 'remember' it.
\`\`\`js
{
    "osram_remember_state": true,            // true, false (boolean)
}
\`\`\`
`,
    },
    {
        model: ['AIRAM-CTR.U'],
        note: `
### Pairing
Hold small reset button pressed (located under battery cover on the backside of remote) for 4
seconds and device will reset and will attempt to join network.
Keep clicking any button on the frontside of the device to keep device awake while pairing.
You should be clicking every two seconds until pairing is complete.

Device seems to join network also when it is paired directly to Airam bulb (which is joined to network already)
(https://www.zigbee2mqtt.io/devices/4713407.html) by keeping ON and DIM buttons pressed while holding remote
within 5 centimeters away from Airam bulb.
`,
    },
    {
        model: ['324131092621'],
        note: `
### Pairing
Factory reset the Hue dimmer switch by pressing and holding the setup button on the back for 10 seconds.

Restart the Hue dimmer switch by holding all 4 buttons of the Hue dimmer switch.
You can let go when the light on the front flashes red/green briefly.

Use the Hue dimmer switch to factory reset a Hue light bulb see
[HOWTO: Factory reset a Hue bulb](https://www.youtube.com/watch?v=qvlEAELiJKs).
After resetting the bulb will automatically connect.
This method also works for Philips Hue Lightstrips.
Hue dimmer switch can also be used to factory reset Ikea Trådfri light bulbs using the same method described above.
`,
    },
    {
        model: '7146060PH',
        note: `
For the 7146060PH (Philips Hue Go), **the power cord has to be connected**,
after the blinking light (**INSTEAD** of step four in the video),
press and keep holding the button on the bottom until the device is paired (+- 60 seconds).
While holding the button the Hue Go will give you a nice light show :smile:.
`,
    },
    {
        model: ['404000/404005/404012', '404006/404008/404004'],
        note: `
### Pairing
Turn the light bulb five times on and off. After turning it on the sixth time,
it will indicate with colors that the bulb is pairing.
`,
    },
    {
        model: ['MLI-404011'],
        note: `
### Pairing
Remove the battery cover and use the cover to press the button above the batteries.
Press and hold this button for 10-20 seconds and release the button.
After that the remote should show up as a paired device.
`,
    },
    {
        model: ['E1524/E1810'],
        note: `
### Pairing
Pair the remote to Zigbee2mqtt by holding it close to the coordinator and
pressing the inside button, next to the CR2032 battery, 4 times.
The red light on the remote will now flash a few times.
`,
    },
    {
        model: ['E1524/E1810'],
        note: `
### Binding
This device does not support binding (limitation of the device). A workaround is to first
get the group ID where the remote is sending it's commands to and add bulbs to the
same group ([discussion](https://github.com/Koenkk/zigbee2mqtt/issues/782#issuecomment-514526256)).

1. Pair the IKEA TRADRI remote control to Zigbee2mqtt.
2. Enable debug logging (log_level: debug) ([documentation](../information/configuration.md)).
3. You will get log output like this: \`10/3/2019, 9:28:02 AM - debug: Received Zigbee message from '0x90fd9ffffe90d778'
of type 'commandToggle' with data '{}' from endpoint 1 with groupID 57173\`.
4. Retrieve the group from the log output, which is \`57173\` in the above example.
5. Add this group to \`configuration.yaml\` and add your device (e.g.) bulb to this group.
([documentation](../information/groups.md)).
`,
    },
    {
        model: ['E1746'],
        note: `
### Pairing
Push the reset button of the device with a paperclip for 5 seconds.
While pairing the LED is flashing/dimming slowly. Once the pairing is finished, the LED stays on.
`,
    },
    {
        model: ['F7C033'],
        note: `
### Pairing
[Resetting or Restoring the Wemo® Smart LED Bulb, F7C033](http://www.belkin.com/us/support-article?articleNum=116178)
`,
    },
    {
        model: ['ICTC-G-1'],
        note: `
### Pairing
To factory reset the TRADFRI wireless dimmer (ICTC-G-1) press the button
4 times (so the red lights starts blinking).
After the blinks you migth be willing to rotate the dimmer
like you are trying to control your lights. It will prevent the device
from going to sleep and ensure successful paiting. In case the dimmer was
recognized but no actions seems to be detected, try to restart the zigbee2mqtt.
See [IKEA TRADFRI wireless dimmer (ICTC-G-1) not pairing](https://github.com/Koenkk/zigbee2mqtt/issues/620).
`,
    },
    {
        model: ['E1603/E1702'],
        note: `
The TRADFRI control outlet also acts as a Zigbee router.
`,
    },
    {
        model: ['E1603/E1702'],
        note: `
### Pairing
To factory reset the TRADFRI control outlet, press and hold the reset button
(pinhole underneath the light, located at the top (bottom if UK) of the outlet) with a
paperclip until the white light starts fading. Hold onto the button for a
few more seconds, then release. After this, the outlet will automatically connect.
`,
    },
    {
        model: ['ICPSHC24-10EU-IL-1', 'ICPSHC24-30EU-IL-1'],
        note: `
### Pairing
To factory reset the TRADFRI drivers use a
small pin or paperclip to push the reset button once.
`,
    },
    {
        vendor: 'IKEA',
        supports: ['brightness'],
        notModel: ['E1524/E1810', 'ICPSHC24-10EU-IL-1', 'ICPSHC24-30EU-IL-1', 'ICTC-G-1', 'E1743'],
        note: `
### Pairing
Factory reset the light bulb ([video](https://www.youtube.com/watch?v=npxOrPxVfe0)).
After resetting the bulb will automatically connect.

While pairing, keep the bulb close the the CC2531 USB sniffer.

What works is to use (very) short “on’s” and a little bit longer “off’s”.
Start with bulb on, then off, and then 6 “on’s”, where you kill the light as soon as the bulb shows signs of turning on.
`,
    },
    {
        model: [
            'WXKG01LM', 'WSDCGQ01LM', 'RTCGQ01LM', 'MCCGQ01LM', 'WXKG11LM', 'WXKG12LM', 'WSDCGQ11LM', 'RTCGQ11LM',
            'MCCGQ11LM', 'MFKZQ01LM',
        ],
        note: `
### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join.
`,
    },
    {
        model: ['TI0001'],
        note: `
### Important
These devices can only be used on channel 26.
These devices are locked to the manufacturer's network key (ext_pan_id).
Your configuration file [data/configuration.yaml](../information/configuration) must contain the following:

\`\`\`yaml
advanced:
  ext_pan_id: [33,117,141,25,0,75,18,0]
  channel: 26
\`\`\`

Therefore these devices may not co-existence with other Zigbee devices.
Maybe, you need to add a dedicated coordinator and create a new network for Livolo.
If you decided to create a new network, you should specify another 'pan_id'.

\`\`\`yaml
advanced:
  pan_id: 6756
\`\`\`
`,
    },
    {
        model: ['JTQJ-BF-01LM/BW', 'JTYJ-GD-01LM/BW'],
        note: `
### Pairing
Plug the device in and wait for around 5mins, while it performs its self-tests.
A successful self-test is indicated by couple of beeps and a steady green led.
Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.
`,
    },
    {
        model: ['SZ-ESW01-AU'],
        note: `
### Pairing
Press and hold the pairing button while plugging in the device.
`,
    },
    {
        model: ['DJT11LM'],
        note: `
### Pairing
Press the reset button for about 5 seconds. The LED lights up 3 times.
Then press the button again every 2 seconds (maximum 20 times).

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*
`,
    },
    {
        model: ['WXKG03LM', 'WXKG02LM', 'QBKG04LM', 'QBKG11LM', 'QBKG03LM', 'QBKG12LM', 'ZNCZ02LM'],
        note: `
### Pairing
Press and hold the button on the device for +- 10 seconds
(until the blue light starts blinking and stops blinking), release and wait.
`,
    },
    {
        model: ['9290012607', '9290019758'],
        note: `
### Pairing
Press and hold the setup button on the rear of the device for +- 10 seconds (until the green light goes solid)
to initiate pairing. Please note that the pairing indicator light is below the main sensor
(as oppose to the obvious indicator above the main sensor).
`,
    },
    {
        vendor: 'Innr',
        supports: ['brightness'],
        note: `
### Pairing
Factory reset the light bulb ([video](https://www.youtube.com/watch?v=4zkpZSv84H4)).
`,
    },
    {
        model: ['RTCGQ01LM', 'RTCGQ11LM'],
        note: `
### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* \`no_occupancy_since\`: Timeout (in seconds) after \`no_occupancy_since\` is send.
This indicates the time since last occupancy was detected.
For example \`no_occupancy_since: [10, 60]\` will send a \`{"no_occupancy_since": 10}\` after 10 seconds
and a \`{"no_occupancy_since": 60}\` after 60 seconds.
* \`occupancy_timeout\`: Timeout (in seconds) after the \`occupancy: false\` message is sent.
If not set, the timeout is \`90\` seconds.
When set to \`0\` no \`occupancy: false\` is send.

**IMPORTANT**: \`occupancy_timeout\` should not be set to lower than 60 seconds.
The reason is this: after detecting a motion the sensor ignores any movements for
exactly 60 seconds. In case there are movements after this, a new message
(\`occupancy: true\`) will be sent and the sensor will go for one more minute sleep, and so on.
This is expected behaviour (see [#270](https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973)).
To work around this, a
[hardware modification](https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806)
is needed.
`,
    },
    {
        model: ['AV2010/22'],
        note: `
### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* \`occupancy_timeout\`: Timeout (in seconds) after the \`occupancy: false\` message is sent.
If not set, the timeout is \`90\` seconds.
When set to \`0\` no \`occupancy: false\` is send.
`,
    },
    {
        model: ['WXKG01LM'],
        note: `
### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* \`long_timeout\`: The WXKG01LM only reports a button press and release.
By default, Zigbee2mqtt publishes a long click when there is at
least 1000 ms between both events. It could be that due to
delays in the network the release message is received late. This causes a single
click to be identified as a long click. If you are experiencing this you can try
experimenting with this option (e.g. \`long_timeout: 2000\`).
`,
    },

    // Device specific configuration
    {
        supports: ['temperature', 'humidity', 'pressure', 'brightness', 'color temperature', 'color', 'illuminance'],
        notDescription: ['thermostat'],
        note: `
### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*
`,
    },
    {
        supports: ['illuminance'],
        note: `
* \`illuminance_calibration\`: Allows to manually calibrate illuminance values,
e.g. \`95\` would take 95% to the illuminance reported by the device; default \`100\`.
`,
    },
    {
        supports: ['temperature'],
        notSupports: ['color temperature'],
        notDescription: ['thermostat'],
        note: `
* \`temperature_precision\`: Controls the precision of \`temperature\` values,
e.g. \`0\`, \`1\` or \`2\`; default \`2\`.
* \`temperature_calibration\`: Allows to manually calibrate temperature values,
e.g. \`1\` would add 1 degree to the temperature reported by the device; default \`0\`.
`,
    },
    {
        supports: ['humidity'],
        note: `
* \`humidity_precision\`: Controls the precision of \`humidity\` values, e.g. \`0\`, \`1\` or \`2\`; default \`2\`.
`,
    },
    {
        supports: ['pressure'],
        note: `
* \`pressure_precision\`: Controls the precision of \`pressure\` values, e.g. \`0\` or \`1\`; default \`1\`.
* \`pressure_calibration\`: Allows to manually calibrate pressure values,
e.g. \`1\` would add 1 to the pressure reported by the device; default \`0\`.
`,
    },
    {
        supports: ['brightness', 'color temperature', 'color'],
        note: `
* \`transition\`: Controls the transition time (in seconds) of brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to \`0\` (no transition).
Note that this value is overridden if a \`transition\` value is present in the MQTT command payload.
`,
    },
    {
        model: ['JTQJ-BF-01LM/BW', 'JTYJ-GD-01LM/BW'],
        note: `
### Sensitivity
The sensitivity can be changed by publishing to \`zigbee2mqtt/[FRIENDLY_NAME]/set\`
\`{"sensitivity": "SENSITIVITY"}\` where \`SENSITVITIY\` is one of the following
values: \`low\`, \`medium\`,  \`high\`.

### Self-test
A self-test can be trigged by publishing to \`zigbee2mqtt/[FRIENDLY_NAME]/set\`
\`{"selftest": ""}\`.
If the selftest is executed succesfully you will hear the device beep in 30 seconds.
`,
    },
    {
        model: ['DJT11LM'],
        note: `
### Sensitivity
The sensitivity can be changed by publishing to \`zigbee2mqtt/[FRIENDLY_NAME]/set\`
\`{"sensitivity": "SENSITIVITY"}\` where \`SENSITVITIY\` is one of the following
values: \`low\`, \`medium\`,  \`high\`.

`,
    },
    {
        model: ['9290012607', '9290019758'],
        note: `
### Motion sensitivity
The motion sensitivity can be changed by publishing to \`zigbee2mqtt/[FRIENDLY_NAME]/set\`
\`{"motion_sensitivity": "SENSITIVITY"}\` where \`SENSITVITIY\` is one of the following
values: \`low\`,  \`medium\`,  \`high\` (default).

### Occupany timeout
Sets the sensors timeout between last motion detected and sensor reports occupance false
\`\`\`js
{
    // Value >= 0,
    // 0 - 10: 10sec (min possible timeout)
    //   > 10: timeout in sec
    // (must be written to (default) endpoint 2)
    "occupancy_timeout": 0,
}
\`\`\`
`,
    },
    {
        model: ['CC2530.ROUTER'],
        note: `
### Pairing
At first boot it will automatically be in pairing mode and join your network.
To reset it into pairing mode power-cycle it three times as follows:

1) power on
2) wait 2sec
3) power off
4) repeat above steps 2 further times
5) power on and wait for it to join your network
    `,
    },
    {
        model: ['IM6001-MPP01'],
        note: `
### Pairing
When pairing, make sure to keep the sensor awake for 20 seconds by openinig and closing the contact
every second.
    `,
    },
    {
        model: ['SJCGQ11LM'],
        note: `
### Pairing
Press and hold water logo on the device for +- 10 seconds until the blue light blinks
three times, release the water logo (the blue light will blink once more) and wait.
    `,
    },
    {
        model: 'HS2WD-E',
        note: `
### Triggering the alarm
The alarm can be trigged by publishing to \`zigbee2mqtt/[FRIENDLY_NAME]/set\` message
\`{"warning": {"duration": 10, "mode": "emergency", "strobe": false}}\`.

Where:
- \`duration\`: the number of seconds the alarm will be on (max is 1800 seconds)
- \`mode\`: \`stop\` or \`emergency\`
- \`strobe\`: \`true\` or \`false\` will let the strobe flash once during the alarm
        `,
    },
    {
        model: 'STS-PRS-251',
        note: `
### Let the device beep.
\`\`\`json
{
    "beep": 5
}
\`\`\`
`,
    },
    {
        model: ['QBKG03LM', 'QBKG04LM', 'QBKG12LM', 'QBKG11LM'],
        note: `
### Decoupled mode
Decoupled mode allows to turn wired switch into wireless button with separately controlled relay.
This might be useful to assign some custom actions to buttons and control relay remotely.
This command also allows to redefine which button controls which relay for double switch.

Special topics should be used:

\`zigbee2mqtt/[FRIENDLY_NAME]/system/set\` to modify operation mode.

Payload:
\`\`\`js
{
    "operation_mode": {
    "button": "single"|"left"|"right",
    "state": "VALUE"
    }
}
\`\`\`

Values                | Description
----------------------|---------------------------------------------------------
\`control_relay\`       | Button directly controls relay (for single switch)
\`control_left_relay\`  | Button directly controls left relay (for double switch)
\`control_right_relay\` | Button directly controls right relay (for double switch)
\`decoupled\`           | Button doesn't control any relay

\`zigbee2mqtt/[FRIENDLY_NAME]/system/get\` to read current mode.

Payload:
\`\`\`js
{
    "operation_mode": {
    "button": "single"|"left"|"right"
    }
}
\`\`\`

Response will be sent to \`zigbee2mqtt/[FRIENDLY_NAME]\`:
\`\`\`json
{"operation_mode_right":"control_right_relay"}
\`\`\`
`,
    },
    {
        model: ['E1524/E1810'],
        note: `
### Toggle button
When clicking the middle (center) button on the remote it will send a \`{"click": "toggle"}\`, when holding it
it will **also** send a \`{"click": "toggle_hold"}\`. It is not possible to skip the \`toggle\` when the button is hold.
Also the remote won't send anything when the button is released.
See [link](https://github.com/Koenkk/zigbee2mqtt/issues/2077#issuecomment-538691885) for more details.
`,
    },
    {
        vendor: 'Konke',
        note: `
### Important
Konke devices only work on Zigbee channel 15, 20 and 25.
`,
    },
    {
        model: ['PP-WHT-US'],
        note: `
### Power measurements
This device only support power measurements with an up-to-date firmware on the plug which can only be done
via the original hub. In case of an older firmware you will only see 0 values in the measurements.
Discussion: https://github.com/Koenkk/zigbee2mqtt/issues/809
`,
    },
    {
        model: ['SPZB0001'],
        note: `
### Controlling
*Current heating setpoint*
\`\`\`json
{
    "current_heating_setpoint": 21.5
}
\`\`\`
Current heating setpoint is also modified when occupied or unoccupied heating setpoint is set.

*Eurotronic system mode*

This is a bitmap encoded field to set several device specific features. Please remind it is not possible to set single bits, always the full bitmap is written. Bit 0 doesnt seem to be writeable, it is always reported as set, so expect your written value + 1 to be reported.

Bit | Position
--- | --------
0 | unknown (default 1)
1 | Mirror display
2 | Boost
3 | unknown
4 | disable window open
5 | set window open (is reported as disable window open)
6 | unknown
7 | Child protection

Examples for eurotronic_system_mode:

Mirror display, reported as 3
\`\`\`json
{
    "eurotronic_system_mode": 2
}
\`\`\`
signal external window open, current_heating_setpoint will report "5", device display shows "OFF"
\`\`\`json
{
    "eurotronic_system_mode": 32
}
\`\`\`
signal external window close, will restore last current_heating_setpoint value
\`\`\`json
{
    "eurotronic_system_mode": 16
}
\`\`\`
Mirror display and set child protection.
\`\`\`json
{
    "eurotronic_system_mode": 66
}
\`\`\`

*Eurotronic error status*
\`\`\`json
{
    "eurotronic_error_status": 0
}
\`\`\`
This field is a readonly bitmap

Bit | Position
--- | --------
0 | reserved
1 | reserved
2 | reserved
3 | Valve adaption failed (E1)
4 | Valve movement too slow (E2)
5 | Valve not moving/blocked (E3)
6 | reserved
7 | reserved
`,
    },
    {
        model: ['J1'],
        note: `
### Configuration of device attributes
By publishing to \`zigbee2mqtt/[FRIENDLY_NAME]/set\` various device attributes can be configured:
\`\`\`json
{
    "configure_j1": {
        "windowCoveringType": xxx,
        "configStatus": xxx,
        "installedOpenLimitLiftCm": xxx,
        "installedClosedLimitLiftCm": xxx,
        "installedOpenLimitTiltDdegree": xxx,
        "installedClosedLimitTiltDdegree": xxx,
        "turnaroundGuardTime": xxx,
        "liftToTiltTransitionSteps": xxx,
        "totalSteps": xxx,
        "liftToTiltTransitionSteps2": xxx,
        "totalSteps2": xxx,
        "additionalSteps": xxx,
        "inactivePowerThreshold": xxx,
        "startupSteps": xxx,
        "totalSteps": xxx,
        "totalSteps2": xxx
    }
}
\`\`\`
For further details on these attributes please take a look at the
[ubisys J1 technical reference manual](https://www.ubisys.de/wp-content/uploads/ubisys-j1-technical-reference.pdf),
chapter "7.2.5. Window Covering Cluster (Server)".

As an alternative to the attributes listed above, the following properties may be used for convenience:
* \`open_to_closed_s\`: corresponds to \`totalSteps\`, but takes value in seconds instead of in full AC waves
* \`closed_to_open_s\`: ditto for \`totalSteps2\`,
* \`lift_to_tilt_transition_ms\`: sets both \`liftToTiltTransitionSteps\` and \`liftToTiltTransitionSteps2\`
(they shall both be equal according to ubisys manual), but takes value in *milli*seconds instead of in full AC waves
* \`steps_per_second\`: factor to be used for conversion, defaults to 50 full AC waves per second if not provided

By publishing to \`zigbee2mqtt/[FRIENDLY_NAME]/get/configure_j1\` the values of the configuration attributes can
also be read back from the device and be printed to the normal zigbee2mqtt log.

### Calibration
By publishing \`{"configure_j1": {"calibrate": 1}}\` to \`zigbee2mqtt/[FRIENDLY_NAME]/set\` the device can also be
calibrated after installation to support more advanced positioning features
(i.e. go to lift percentage / go to tilt percentage). This can be combined with setting attributes as shown above,
for example:
\`\`\`json
{
    "configure_j1": {
        "calibrate" : 1,
        "windowCoveringType": 8,
        "lift_to_tilt_transition_ms": 1600
    }
}
\`\`\`
The calibration procedure will move the shutter up and down several times and the current stage of the
calibration process will again be logged to the normal zigbee2mqtt log for the user to get some feedback.
For details on the calibration procedure please again take a look at
the [ubisys J1 technical reference manual](https://www.ubisys.de/wp-content/uploads/ubisys-j1-technical-reference.pdf),
chapter "7.2.5.1. Calibration".
Please note that tilt transition steps cannot be determined automatically and must therefore be
configured manually for the device to also support "go to tilt percentage". One possibility to determine the
correct value is to take a video of the blinds moving from 0 to 100 percent tilt and then getting the exact timing
from the video by playing it slow motion.

### Home Assistant cover features when using [MQTT discovery](../integration/home_assistant)
The cover will be offered to Home Assistant as supporting lift and tilt by default, but for covers with reduced
functionality this can be passed along to Home Assistant by disabling some of the topics in \`configuration.yaml\`,
for example:
\`\`\`yaml
'0x001fee0000001234':
    friendly_name: cover_not_supporting_tilt'
    homeassistant:
    tilt_command_topic: null
    tilt_status_topic: null
'0x001fee0000001234':
    friendly_name: cover_supporting_neither_lift_nor_tilt'
    homeassistant:
    set_position_topic: null
    position_topic: null
    tilt_command_topic: null
    tilt_status_topic: null
\`\`\`
`,
    },
    {
        model: ['1TST-EU', 'AV2010/32'],
        note: `
### Controlling
Get local temperature in degrees Celsius (in the range 0x954d to 0x7fff, i.e. -273.15°C to 327.67 ºC)
\`\`\`json
{
    "local_temperature": ""
}
\`\`\`

Get or set offset added to/subtracted from the actual displayed room temperature to NUMBER, in steps of 0.1°C
\`\`\`js
{
    "local_temperature_calibration": "NUMBER"       // Possible values: –2.5 to +2.5; leave empty to read
}
\`\`\`

Set temperature display mode
\`\`\`js
{
    "temperature_display_mode": ""      // Possible values: 0 to set °C or 1 so set °F
}
\`\`\`

Get room occupancy. Specifies whether the heated/cooled space is occupied or not. If 1, the space is occupied,
else it is unoccupied.
\`\`\`json
{
    "thermostat_occupancy": ""
}
\`\`\`

Get or set occupied heating setpoint to NUMBER in degrees Celsius.
\`\`\`js
{
    "occupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to  MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
\`\`\`

Get or set unoccupied heating setpoint to NUMBER in degrees Celsius
\`\`\`js
{
    "unoccupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
\`\`\`

Increase or decrease heating setpoint by NUMBER degrees in °C.
\`\`\`js
{
    "setpoint_raise_lower": {
    "mode": "0x00",       // Possible values: see table below
    "amount": "NUMBER"    // Possible values: signed 8-bit integer that specifies the amount the setpoint(s) are to be increased (or decreased) by, in steps of 0.1°C
    }
}
\`\`\`

Attribute Value | Description
----------------|-----------------------------------------------
0x00            | Heat (adjust Heat Setpoint)
0x01            | Cool (adjust Cool Setpoint)
0x02            | Both (adjust Heat Setpoint and Cool Setpoint)

Get or set whether the local temperature, outdoor temperature and occupancy are being sensed by internal sensors or remote networked sensors
\`\`\`js
{
    "remote_sensing": "NUMBER"      // Possible values: see table below; leave empty to read
}
\`\`\`

Bit Number | Description
-----------|-----------------------------------------
0          | 0 – local temperature sensed internally <br> 1 – local temperature sensed remotely
1          | 0 – outdoor temperature sensed internally <br> 1 – outdoor temperature sensed remotely
2          | 0 – occupancy sensed internally <br> 1 – occupancy sensed remotely

Get or set control sequence of operation
\`\`\`js
{
    "control_sequence_of_operation": "VALUE"       // Possible values: see table below; leave empty to read
}
\`\`\`

Values                                    | Possible Values of SystemMode
------------------------------------------|-------------------------------------
\`cooling only\`                            | Heat and Emergency are not possible
\`cooling with reheat\`                     | Heat and Emergency are not possible
\`heating only\`                            | Cool and precooling are not possible
\`heating with reheat\`                     | Cool and precooling are not possible
\`cooling and heating 4-pipes\`             | All modes are possible
\`cooling and heating 4-pipes with reheat\` | All modes are possible

Get or set system mode
\`\`\`js
{
    "system_mode": "VALUE"       // Possible values: see table below; leave empty to read
}
\`\`\`

Values              |
--------------------|
\`off\`               |
\`auto\`              |
\`cool\`              |
\`heat\`              |
\`emergency heating\` |
\`precooling\`        |
\`fan only\`          |
\`dry\`               |
\`sleep\`             |

Get running state
\`\`\`js
{
    "running_state": ""       // leave empty when reading
}
\`\`\`
Possible values:

Values |
-------|
\`off\`  |
\`cool\` |
\`heat\` |

Valve position / heating demand
\`\`\`
{
    "pi_heating_demand": 0       // leave empty when reading
}
\`\`\`
Will report the valve position or heating amount depending on device. 0=min, 255=max

Get or set weekly schedule
\`\`\`js
{
    "weekly_schedule": {
    "TemperatureSetpointHold": "0x00",                // 0x00 setpoint hold off or 0x01 on
    "TemperatureSetpointHoldDuration": "0xffff",      // 0xffff to 0x05a0
    "ThermostatProgrammingOperationMode": "00xxxxxx"  //see table below
    }                                                   // leave empty to read
}
\`\`\`

Attribute Value | Description
----------------|---------------------------------------------------------------------------
0               | 0 – Simple/setpoint mode. This mode means the thermostat setpoint is altered only by manual up/down changes at the thermostat or remotely, not by internal schedule programming. <br> 1 – Schedule programming mode. This enables or disables any programmed weekly schedule configurations. <br> Note: It does not clear or delete previous weekly schedule programming configurations.
1               | 0 - Auto/recovery mode set to OFF <br> 1 – Auto/recovery mode set to ON
2               | 0 – Economy/EnergyStar mode set to OFF <br> 1 – Economy/EnergyStar mode set to ON

Clear weekly schedule
\`\`\`json
{
    "clear_weekly_schedule": ""
}
\`\`\`
<!--
Coming soon:
Get weekly schedule response
tz.thermostat_weekly_schedule_rsp
Get relay status log
tz.thermostat_relay_status_log
Get relay status log response
tz.thermostat_relay_status_log_rsp
-->
`,
    },
];

module.exports = notes;
