const wildlifeColor = "#4f7d55";

Blockly.Blocks["wildlife_imports"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("import wildlife monitor libraries");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    },
};

Blockly.Blocks["pir_setup"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set up PIR motion sensor on GPIO")
            .appendField(new Blockly.FieldNumber(17, 0, 27, 1), "pin");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    },
};

Blockly.Blocks["dht22_setup"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set up DHT22 sensor on GPIO")
            .appendField(new Blockly.FieldNumber(4, 0, 27, 1), "pin");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    },
};

Blockly.Blocks["pir_wait_for_motion"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("wait for motion");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    },
};

Blockly.Blocks["dht22_read_safe"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("read and display DHT22 temperature + humidity safely");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    },
};

Blockly.Blocks["photo_filename_timestamp"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("make timestamped photo filename");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    },
};

Blockly.Blocks["camera_take_photo"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("take Raspberry Pi camera photo");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    },
};

Blockly.Blocks["pir_wait_for_no_motion"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("wait until motion stops");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(wildlifeColor);
    },
};
