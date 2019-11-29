import React from "react"
import ReactDOM from "react-dom";

class Pierwszy extends React.Component {

    imie : string =  "Ala"
    metoda = () => {
        this.imie = "Ela";
        console.log(this.imie);
    }
    
    render() {
        return (
            <div>
            <div>Hello world {this.imie}!</div>
            <button onClick={this.metoda}>Kliknij mnie!</button>
            </div>
        );
    }
}

ReactDOM.render(<Pierwszy></Pierwszy>,
    document.querySelector("div")
    );