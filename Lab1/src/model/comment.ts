export default class Comment{
    private _content: string;
    private _date: Date;
    private _responses: Comment[];
    private _nickname: string;

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }

    public get nickname(): string {
        return this._nickname;
    }
    public set nickname(value: string) {
        this._nickname = value;
    }

    constructor(content: string, nickname: string)
    {
        this.content = content;
        this.nickname = nickname;
    }

    addResponse(comment: Comment): void{

    }

    getResponses(): Comment[]{
        return []
    }
}