Blockly.Python["import_time"] = () => `# Used to pause the program
import time
`;
Blockly.Python["import_subprocess"] = () => `# Used to run Raspberry Pi camera and microphone commands
import subprocess
`;
Blockly.Python["import_datetime"] = () => `# Used to create timestamps for photo and audio filenames
from datetime import datetime
`;
Blockly.Python["import_motion_sensor"] = () => `# Used to control the PIR motion sensor
from gpiozero import MotionSensor
`;
Blockly.Python["import_board"] = () => `# Used to identify Raspberry Pi GPIO pins for the DHT22 sensor
import board
`;
Blockly.Python["import_adafruit_dht"] = () => `# Used to read temperature and humidity from the DHT22 sensor
import adafruit_dht
`;

Blockly.Python["pir_setup"] = function(block) {
    const pin = block.getFieldValue("pin");
    return `# Create a PIR motion sensor connected to GPIO ${pin}
pir = MotionSensor(${pin})
`;
};
Blockly.Python["pir_wait_for_motion"] = () => `# Wait here until the PIR sensor detects motion
pir.wait_for_motion()
`;
Blockly.Python["pir_wait_for_no_motion"] = () => `# Wait here until the PIR sensor no longer detects motion
pir.wait_for_no_motion()
`;

Blockly.Python["dht22_setup"] = function(block) {
    const pin = block.getFieldValue("pin");
    return `# Create a DHT22 temperature and humidity sensor connected to GPIO ${pin}
dht = adafruit_dht.DHT22(board.D${pin})
`;
};
Blockly.Python["dht22_read_safe"] = () => `# Try to read the DHT22 sensor
try:
    # Read the temperature in degrees Celsius
    temperature = dht.temperature
    # Read the relative humidity as a percentage
    humidity = dht.humidity
    # Display the temperature
    print("Temperature:", temperature, "C")
    # Display the humidity
    print("Humidity:", humidity, "%")
# Handle a temporary DHT22 reading error
except RuntimeError:
    # Tell the user that the DHT22 sensor could not be read
    print("Could not read the DHT22 sensor.")
`;

Blockly.Python["camera_take_photo"] = () => `# Get the current date and time and turn it into a timestamp
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
# Use the timestamp to create a unique photo filename
filename = "photo_" + timestamp + ".jpg"
# Run the Raspberry Pi camera command to take a picture
subprocess.run([
    "rpicam-still",
    "-o",
    filename,
    "--nopreview"
])
# Tell the user where the photo was saved
print("Photo saved:", filename)
`;

Blockly.Python["microphone_record"] = function(block) {
    const device = block.getFieldValue("device");
    const duration = block.getFieldValue("duration");
    const rate = block.getFieldValue("rate");
    const channels = block.getFieldValue("channels");
    return `# Get the current date and time and turn it into a timestamp
audio_timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
# Use the timestamp to create a unique audio filename
audio_filename = "pi/audio_" + audio_timestamp + ".wav"
# Run the Linux audio recording command
subprocess.run([
    "arecord",
    # Select the USB microphone
    "-D", "${device}",
    # Record 16-bit audio
    "-f", "S16_LE",
    # Set the sample rate
    "-r", "${rate}",
    # Set the number of audio channels
    "-c", "${channels}",
    # Set how many seconds to record
    "-d", "${duration}",
    # Save using the timestamped filename
    audio_filename
])
# Tell the user where the audio recording was saved
print("Audio saved:", audio_filename)
`;
};
