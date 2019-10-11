import Article from './article'

export default class Author{
    private _id: number;
    private _name: string;
    private _surname: string;
    private _email: string;

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get surname(): string {
        return this._surname;
    }
    public set surname(value: string) {
        this._surname = value;
    }
    
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    constructor(name: string, surname: string, email: string) {
        this._name = name;
        this._surname = surname;
        this._email = email;
    }

    isValidEmailAddress (email) {
        return /^[\w-']+(\.[\w-']+)*@([a-zA-Z0-9]+[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(email);
    }
    

}