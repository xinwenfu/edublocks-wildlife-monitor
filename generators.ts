Blockly.Python["wildlife_imports"] = function() {
    const code =
`import time
import subprocess
from datetime import datetime
from gpiozero import MotionSensor
import board
import adafruit_dht
`;
    return code;
};

Blockly.Python["pir_setup"] = function(block) {
    const pin = block.getFieldValue("pin");
    return `pir = MotionSensor(${pin})\n`;
};

Blockly.Python["dht22_setup"] = function(block) {
    const pin = block.getFieldValue("pin");
    return `dht = adafruit_dht.DHT22(board.D${pin})\n`;
};

Blockly.Python["pir_wait_for_motion"] = function() {
    return "pir.wait_for_motion()\n";
};

Blockly.Python["dht22_read_safe"] = function() {
    const code =
`try:
    temperature = dht.temperature
    humidity = dht.humidity
    print("Temperature:", temperature, "C")
    print("Humidity:", humidity, "%")
except RuntimeError:
    print("Could not read the DHT22 sensor.")
`;
    return code;
};

Blockly.Python["photo_filename_timestamp"] = function() {
    const code =
`timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
filename = "/home/pi/photo_" + timestamp + ".jpg"
`;
    return code;
};

Blockly.Python["camera_take_photo"] = function() {
    const code =
`subprocess.run([
    "rpicam-still",
    "-o",
    filename,
    "--nopreview"
])
print("Photo saved:", filename)
`;
    return code;
};

Blockly.Python["pir_wait_for_no_motion"] = function() {
    return "pir.wait_for_no_motion()\n";
};
