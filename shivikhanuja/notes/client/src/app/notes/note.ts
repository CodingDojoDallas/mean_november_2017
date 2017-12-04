export class Note {
    content: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(){
        this.content = "";
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
