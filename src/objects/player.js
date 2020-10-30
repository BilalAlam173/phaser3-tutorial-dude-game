import { scene } from '../index';

export default class Player {

    static player;

    static score = 0;

    static init() {
        this.player = scene.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.4);
        this.player.setCollideWorldBounds(true);

        this.initAnimations();

    }

    static initCollider(platforms) {
        scene.physics.add.collider(this.player, platforms);
    }

    static get() {
        return this.player;
    }

    static increaseScore(inc) {
        this.score += inc;
    }

    static initAnimations() {
        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

}