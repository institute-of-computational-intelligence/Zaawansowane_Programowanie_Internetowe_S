

class Blog {
    private _id: number;
    private _nazwa: string;
    private _author: Author;
    private _article: Article[];

    public nazwa(): string {
        return this._author;
    };

    public author(): Author {
        return this._author;
    }

    constructor(nazwa: string, author: Author) {
        this._nazwa = nazwa;
        this._author = author;
    }

    addArticle(article: Article): void {
        this._article.push(article)
    }

    fetchArticlesName(): string {
        let result = ''
        for (let i = 0; i < this._article.length; i++) {
            result += this._article[i].name;
        }
        return result;
    }

    fetchArticle(title: string): Article {
        for(let i = 0; i < this._article.length; i++) {
            if (this._article[i] === title) {
                return this._article[i];
            }
            else {
                return 'There is no such an article'
            }
        }
    }
}