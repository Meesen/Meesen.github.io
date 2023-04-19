export class project {
    title: String;
    summary: String;
    duration: string;
    location: string;
    img: string;


    constructor(title: String, summary: String, duration: string, location: string, img: string){
        this.title = title;
        this.summary = summary;
        this.duration = duration;
        this.location = location;
        this.img = img;
    }
}