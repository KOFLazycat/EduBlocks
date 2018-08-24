export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_microbit'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from microbit import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the microbit library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_signal'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from signal import pause');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the signal library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pause_s'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pause()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Pause');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['random'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import random');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the random library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

//   deprecated
  Blocks['while_true'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while True:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Forever loop.');
      this.setHelpUrl('https://t.co/PCZC5EFe4D');
    },
  };

  Blocks['pass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pass');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Pass to the next command');
      this.setHelpUrl('http://www.example.com/');
    },
  };

//   deprecated
  Blocks['if'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('0'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('If Statement.');
      this.setHelpUrl('');
    },
  };

  Blocks['class'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('class')
        .appendField(new Blockly.FieldTextInput('0'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Class Statement.');
      this.setHelpUrl('');
    },
  };

  Blocks['varprint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print(')
        .appendField(new Blockly.FieldTextInput(''), 'var')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Use this to print a variable.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

//   deprecated
  Blocks['ifcroc'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('this'), 'this')
        .appendField(new Blockly.FieldDropdown([['>', '>'], ['<', '<']]), 'crocsigns')
        .appendField(new Blockly.FieldTextInput('that'), 'that')
        .appendField(':');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('If statement with greater and less than');
      this.setHelpUrl('');
    },
  };

  Blocks['varminus'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '1')
        .appendField('-=')
        .appendField(new Blockly.FieldTextInput('0'), '2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Variable with - and =');
      this.setHelpUrl('');
    },
  };

  Blocks['for'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for')
        .appendField(new Blockly.FieldTextInput('i'), 'letter')
        .appendField('in range(')
        .appendField(new Blockly.FieldTextInput('number'), 'no')
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('Create a for loop');
    },
  };

  Blocks['advancedforloops'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for')
        .appendField(new Blockly.FieldTextInput('x'), 'x')
        .appendField('in')
        .appendField(new Blockly.FieldTextInput('y'), 'y');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

//   deprecated
  Blocks['ifequals'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('this'), 'this')
        .appendField('==')
        .appendField(new Blockly.FieldTextInput('that'), 'that');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['importinputs'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import inputs');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['return2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('return')
        .appendField(new Blockly.FieldTextInput(''), 'return');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

//   deprecated
  Blocks['elif'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('elif')
        .appendField(new Blockly.FieldTextInput('0'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Elif Statement.');
      this.setHelpUrl('');
    },
  };

  Blocks['else'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('else:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Else statement');
      this.setHelpUrl('https://t.co/PCZC5EFe4D');
    },
  };

  Blocks['df'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('def'), 'def')
        .appendField('()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Trigger a define function');
      this.setHelpUrl('');
    },
  };

  Blocks['whileout'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while');
      this.appendValueInput("cond")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };



  Blocks['import_math'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import math');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the math library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_audio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import audio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the audio library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['sleep'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sleep(')
        .appendField(new Blockly.FieldTextInput(''), 'sleep')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Sleep');
      this.setHelpUrl('');
    },
  };

  Blocks['print'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print("')
        .appendField(new Blockly.FieldTextInput(''), 'print')
        .appendField('" )');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Use this to print to the output box.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['equalsblock'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '1')
        .appendField('=')
        .appendField(new Blockly.FieldTextInput('0'), '2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['define'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('def ')
        .appendField(new Blockly.FieldTextInput(''), '1')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), '2')
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

//   deprecated
  Blocks['greater'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while')
        .appendField(new Blockly.FieldTextInput(''), '1')
        .appendField('>')
        .appendField(new Blockly.FieldTextInput(''), 'v')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['ifinline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if');
      this.appendValueInput("iftext")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('ifstate')
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('If block with inline input');
      this.setHelpUrl('');
    },
  };

  Blocks['typeanything'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput(""), "stuff");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
   this.setTooltip("Type any python code into this block");
   this.setHelpUrl("");
    }
  };

  Blocks['elifinline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('elif');
      this.appendValueInput('iftext')
        .setCheck(null)
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('ifstate')
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('ElIf block with inline input');
      this.setHelpUrl('');
    },
  };

  Blocks['buttonapressed'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('button_')
        .appendField(new Blockly.FieldDropdown([['a', 'a'], ['b', 'b']]), 'NAME')
        .appendField('.is_pressed()');
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(336);
      this.setTooltip('Button A Pressed');
      this.setHelpUrl('');
    },
  };

  Blocks['internal'] = {
    init: function() {
        // should you translate to other languages
        // var rtlOperators = [
        //     // ['=', 'EQ'],
        //     // ['\u2260', 'NEQ'],
        //     ['\u200F<\u200F', 'LT'],
        //     ['\u200F\u2264\u200F', 'LTE'],
        //     ['\u200F>\u200F', 'GT'],
        //     ['\u200F\u2265\u200F', 'GTE']
        //   ];
          var ltrOperators = [
            ['==', '=='],
            ['!=', '!='],
            ['<', '<'],
            ['<=', '<='],
            ['>', '>'],
            ['=>', '=>']
          ];
          var OPERATORS = ltrOperators;
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(OPERATORS), "choose")
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(336);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['textinline'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput(""), "text");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(336);
   this.setTooltip("Text input for inline input");
   this.setHelpUrl("");
    }
  };

  Blocks['varinlines'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("variable"), "NAME")
          .appendField(new Blockly.FieldTextInput("="), "text");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
   this.setTooltip("Variable with inline");
   this.setHelpUrl("");
    }
  };


}
