import React from 'react';
import Image from "../Image"


export default class Book extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = {}
    }
    render() {

        const width = { width: "12rem", display: "inline-block", verticalAlign: "top" }
        const { props } = this
        // console.log(props)
        let styled = {}
        if (props.hebrew) {
            props.language === "Hebrew" ? styled = { ...width, opacity: "1" } : styled = { ...width, opacity: "0.2" }
        } else styled = width
        return (
            <div className="card" style={styled}>
                <Image pics={props.pics} refrance={props.imageLink} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.year}</li>
                    </ul>
                </div>
            </div>
        )
    }
}









