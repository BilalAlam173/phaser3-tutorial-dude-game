import preload from './common/loader';
import { config } from './common/config';
import Platform from './objects/platform';
import Player from './objects/player';
import Star from './objects/star';
import Bomb from './objects/bomb';
import Phaser from 'phaser';
import { Text } from './objects/text';
export let scene;
export let scoreText;
let player;
let platforms;

const game = new Phaser.Game(config(preload, create, update));

function initBackground() {
    this.add.image(400, 300, 'sky');
    scoreText = new Text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
}

function create() {

    var t = 4;
    scene = this;

    initBackground.call(this);
    Platform.init();
    Player.init();
    Player.initCollider(Platform.get());
    Star.init();
    Star.initCollider(Platform.get(), Player.get());
    Bomb.init(Platform.get(), Player.get());
    Bomb.initCollider(Platform.get(), Player.get());

}

function update() {
    let cursors = this.input.keyboard.createCursorKeys();

    if (!Player.get()) return;
    if (cursors.left.isDown) {
        Player.get().setVelocityX(-160);
        Player.get().anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        Player.get().setVelocityX(160);

        Player.get().anims.play('right', true);
    } else if (cursors.up.isDown) {
        Player.get().setVelocityY(-130);
    }
    else {
        Player.get().setVelocityX(0);

        Player.get().anims.play('turn');
    }

}
