import Comment from './comment'

export default class Article{
    private _id: number;
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _comments: Comment[];

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    constructor(title: string, content: string)
    {
        this.title = title;
        this.content = content;
        this._creationDate = (Date) Date.now();
    }

    addComment(comment: Comment): void{

    }

    getComments(): Comment[]{
        return []
    }
}