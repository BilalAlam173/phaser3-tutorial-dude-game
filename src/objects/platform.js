import { scene } from '../index';

export default class Platform {
    static platforms = 3;
    static init() {
        this.platforms = scene.physics.add.staticGroup();

        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
    }

    static get() {
        return this.platforms;
    }
}