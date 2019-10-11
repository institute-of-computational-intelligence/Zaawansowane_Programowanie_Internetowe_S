import Article from './article'
import Author from './author'

export default class Blog{
    private _id: number;
    private _name: string;
    private _author: Author;
    private _article: Article[];

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    public get author(): Author {
        return this._author;
    }
    public set author(value: Author) {
        this._author = value;
    }

    constructor(name: string, author: Author) {
        if(name == '')
            throw new Error("Pole 'nazwa' nie może  być puste")
        else this._name = name;

        if(!author)
            throw new Error("Pole 'autor' musi zostać podane")
        else
            this._author = author;
    }

    public addArticle(article: Article): void{

    }

    public getArticleTitles(): string[]{
        return ['a']
    }

    public getArticle(title: string){

    }
}