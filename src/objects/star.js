import { scene, scoreText } from "../index";
import Player from "./player";

import Bomb from './bomb';


export default class Star {

    static stars;
    static points = 10;
    static init() {

        this.stars = scene.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        this.stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });
    }

    static initCollider(platforms, player) {
        scene.physics.add.collider(this.stars, platforms);
        scene.physics.add.overlap(player, this.stars, this.collectStar, null, this);
    }

    static collectStar(player, star) {
        star.disableBody(true, true);
        star.disableBody(true, true);

        Player.increaseScore(this.points);
        scoreText.text('Score: ' + Player.score);
        if (this.stars.countActive(true) === 0) {
            this.stars.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });

            let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            let bomb = Bomb.get().create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

        }
    }

    get() {
        return this.stars;
    }
}
