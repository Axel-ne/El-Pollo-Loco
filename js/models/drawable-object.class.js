export class DrawableObject {
    img;
    imageChache = {};
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

        loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
    }


drawFrame(ctx) {
        if (this.showFrame) {
            this.getRealFrame();
        ctx.beginPath();
        ctx.linewidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.rX, this.rY, this.rW, this.rH);
        ctx.stroke();
        }
    }

}