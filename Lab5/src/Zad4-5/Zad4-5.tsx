import React from "react"
import { number } from "prop-types";

interface Stan {
    liczba: number;
}

export default class Zad4 extends React.Component<{}, Stan> {

    constructor(props:{}) {
        super(props);
        this.state = {liczba: 0};
    }

    metoda1 = () => {
        const nowyStan = {liczba: this.state.liczba + 1};
        this.setState(nowyStan);
    }
    metoda2 = () => {
        const nowyStan = {liczba: this.state.liczba - 1};
        this.setState(nowyStan);
    }
    metoda3 = () => {
        const nowyStan = {liczba: this.state.liczba + 2};
        this.setState(nowyStan);
    }
    metoda4 = () => {
        const nowyStan = {liczba: this.state.liczba - 2};
        this.setState(nowyStan);
    }
    
    render() {
        return (
            <div>
            <p>{this.state.liczba}</p>
            <button onClick={this.metoda1}>+1</button>
            <button onClick={this.metoda2}>-1</button>
            <p></p>
            <button onClick={this.metoda3}>+2</button>
            <button onClick={this.metoda4}>-2</button>
            </div>
        );
    }
}