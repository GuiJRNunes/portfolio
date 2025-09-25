import type { ImageMetadata } from "astro";

export class SlideImage {
    src: ImageMetadata;
    alt: string;
    id: string;

    constructor() {
        this.src = {src: "", width: 0, height: 0, format: "png"};
        this.alt = "";
        this.id = "";
    }
}