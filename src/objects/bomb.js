import { scene } from '../index';
import Player from './player';

export default class Bomb {
    static bombs;
    static init() {
        this.bombs = scene.physics.add.group();
    }

    static initCollider(platforms, player) {
        scene.physics.add.collider(this.bombs, platforms);

        scene.physics.add.collider(player, this.bombs, this.playerCollide, null, this);
    }

    static get() {
        return this.bombs;
    }

    static playerCollide(player, bomb) {
        scene.physics.pause();

        Player.get().setTint(0xff0000);

        Player.get().anims.play('turn');

        scene.gameOver = true;
    }
}