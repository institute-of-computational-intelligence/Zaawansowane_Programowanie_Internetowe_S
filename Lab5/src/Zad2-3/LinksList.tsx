import { string } from "prop-types";
import React from "react";

interface items {
    adres: string;
    nazwa: strin
}

class ToDoList extends React.Component<{items:{adres:string, nazwa:string}[]}>{

    render() {
        return <ul>
            {this.props.items.map(
                item=><li key={item.nazwa}>{item.adres}</li>
            )}
        </ul>
    }
}