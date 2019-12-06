import React from "react"

interface Stan {
    dane : string;
}

export default class Zad1 extends React.Component<{}, Stan> {

    constructor(props:{}) {
        super(props);
        this.state = {dane:"Jakies dane"};
    }
    metoda = () => {
        const nowyStan = {dane : "Mikolaj Otreba"};
        this.setState(nowyStan);
    }
    
    render() {
        return (
            <div>
            <p>{this.state.dane}</p>
            <button onClick={this.metoda}>Kliknij mnie!</button>
            </div>
        );
    }
}
