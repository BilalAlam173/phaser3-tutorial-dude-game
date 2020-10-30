import { scene } from "../index";


export class Text {
    obj;
    constructor(x, y, text, style) {
        this.obj = scene.add.text(x, y, text, style);
    }

    text(str) {
        this.obj.setText(str || "");
    }
}