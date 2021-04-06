class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }
	
	preload() {
		this.load.image("background","./assets/bg/mfm/menuDesat.png");
	}

    create() {
		this.add.image(480, 360, 'background');
        var ruvBtn = this.add.text(100, 100, 'Ruv', {
            font: "65px Arial",
            fill: "#ffffff",
            align: "center",
			stroke: "#000000",
			strokeThickness: 6
        });
		
		 var sarvBtn = this.add.text(100, 200, 'Sarv', {
            font: "65px Arial",
            fill: "#ffffff",
            align: "center",
			stroke: "#000000",
			strokeThickness: 6
        });
		
		var sarvdkBtn = this.add.text(100, 300, 'Sarv Dark', {
            font: "65px Arial",
            fill: "#ffffff",
            align: "center",
			stroke: "#000000",
			strokeThickness: 6
        });
		
		var sarvdk2Btn = this.add.text(100, 400, 'Sarv Dark 2', {
            font: "65px Arial",
            fill: "#ffffff",
            align: "center",
			stroke: "#000000",
			strokeThickness: 6
        });

        ruvBtn.setInteractive().on('pointerdown', function(pointer) {
            this.scene.start('RuvScene');
        }, this);
		
		sarvBtn.setInteractive().on('pointerdown', function(pointer) {
            this.scene.start('SarvScene');
        }, this);
		
		sarvdkBtn.setInteractive().on('pointerdown', function(pointer) {
            this.scene.start('SarvDarkScene');
        }, this);
		
		sarvdk2Btn.setInteractive().on('pointerdown', function(pointer) {
            this.scene.start('SarvDark2Scene');
        }, this);

    }
}

export default MainScene;