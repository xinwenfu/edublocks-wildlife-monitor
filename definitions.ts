const wildlifeColor = "#4f7d55";

function statementBlock(label) {
    return {
        init: function() {
            this.appendDummyInput().appendField(label);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(wildlifeColor);
        }
    };
}

Blockly.Blocks["import_time"] = statementBlock("import time");
Blockly.Blocks["import_subprocess"] = statementBlock("import subprocess");
Blockly.Blocks["import_datetime"] = statementBlock("from datetime import datetime");
Blockly.Blocks["import_motion_sensor"] = statementBlock("from gpiozero import MotionSensor");
Blockly.Blocks["import_board"] = statementBlock("import board");
Blockly.Blocks["import_adafruit_dht"] = statementBlock("import adafruit_dht");

Blockly.Blocks["pir_setup"] = {
    init: function() {
        this.appendDummyInput().appendField("set up PIR motion sensor on GPIO")
            .appendField(new Blockly.FieldNumber(17, 0, 27, 1), "pin");
        this.setPreviousStatement(true, null); this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    }
};
Blockly.Blocks["pir_wait_for_motion"] = statementBlock("wait for motion");
Blockly.Blocks["pir_wait_for_no_motion"] = statementBlock("wait until motion stops");

Blockly.Blocks["dht22_setup"] = {
    init: function() {
        this.appendDummyInput().appendField("set up DHT22 sensor on GPIO")
            .appendField(new Blockly.FieldNumber(4, 0, 27, 1), "pin");
        this.setPreviousStatement(true, null); this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    }
};
Blockly.Blocks["dht22_read_safe"] = statementBlock("read temperature & humidity");
Blockly.Blocks["camera_take_photo"] = statementBlock("take Raspberry Pi camera photo");

Blockly.Blocks["microphone_record"] = {
    init: function() {
        this.appendDummyInput().appendField("record sound");
        this.appendDummyInput().appendField("device")
            .appendField(new Blockly.FieldTextInput("plughw:1,0"), "device");
        this.appendDummyInput().appendField("duration")
            .appendField(new Blockly.FieldNumber(10, 1, 3600, 1), "duration")
            .appendField("seconds");
        this.appendDummyInput().appendField("sample rate")
            .appendField(new Blockly.FieldDropdown([
                ["8000 Hz","8000"],["16000 Hz","16000"],["22050 Hz","22050"],
                ["44100 Hz","44100"],["48000 Hz","48000"]
            ]), "rate");
        this.appendDummyInput().appendField("channels")
            .appendField(new Blockly.FieldDropdown([["1 (mono)","1"],["2 (stereo)","2"]]), "channels");
        this.setPreviousStatement(true, null); this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    }
};
