import MainScene from './scripts/main.js';
import RuvScene from './scripts/ruv.js';
import SarvScene from './scripts/sarv.js';
import SarvDarkScene from './scripts/sarv-dark.js';
import SarvDark2Scene from './scripts/sarv-dark2.js';

var config = {
      type: Phaser.CANVAS,
      width: 960,
      height:  720,
      scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
	  backgroundColor: "#FFFFFF",
      parent: 'phaser-example',
      scene: [ MainScene, RuvScene, SarvScene, SarvDarkScene, SarvDark2Scene]
    };
		 
var game = new Phaser.Game(config);