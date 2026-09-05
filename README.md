# EduBlocks Wildlife Monitor

Custom EduBlocks blocks for a Raspberry Pi wildlife-monitoring project.

## Blocks
- Separate import blocks, each generating an explanatory Python comment
- PIR setup, wait for motion, and wait until motion stops
- DHT22 setup and Read Temperature & Humidity
- Raspberry Pi camera photo
- USB microphone recording with device, duration, sample-rate, and channel parameters

## Teaching abstractions
- DHT22 `try/except RuntimeError` is hidden inside **Read Temperature & Humidity**.
- Timestamp and filename creation are hidden inside **Take Photo**.
- Timestamp and filename creation are hidden inside **Record Sound**.
- The generated Python still shows these implementation details and explanatory comments.

## Import into EduBlocks
Upload these files to the root of a public GitHub repository. In EduBlocks, open **Extensions > Import from GitHub**, paste the repository URL, and import it.

## Raspberry Pi requirements
The generated code expects `gpiozero`, `adafruit-circuitpython-dht`, `rpicam-still`, and `arecord`. The default USB microphone device is `plughw:1,0`; use `arecord -l` on the Pi to verify the actual device.
