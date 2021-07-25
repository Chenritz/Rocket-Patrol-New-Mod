let config = {
    type: Phaser.AUTO,
    width: 720, 
    height: 480, 
    scene: [Start, Play]
    // the above line gives error message scene not defined
}



let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;