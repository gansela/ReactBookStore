import React, { ButtonHTMLAttributes } from 'react';
import Image from "../Image"


export default class TdBook extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = {}
    }
    render() {
        const { props } = this
        let btn: any = ""
        const delbtn = <button onClick={(e) => {
            const value = props.title
            props.hwFunc({ value })
        }}>delete</button>
        const add = <button onClick={(e) => {
            const value = props.title

            // console.log(props.hwFunc)
            props.hwFunc({ ...props, del: true })
        }}>Add</button>
        props.del ? btn = delbtn : btn = add
        const width = { color: "blue", verticalAlign: "top" }

        // console.log(props)
        let styled = {}
        if (props.hebrew) {
            props.language === "Hebrew" ? styled = { ...width, opacity: "1" } : styled = { ...width, opacity: "0.2" }
        } else styled = width
        return (

            <div style={styled} >
                <tr className=" d-flex justify-content-between" style={{ border: "black solid 1px" }} >
                    <th scope="col" >{props.num}</th>
                    <td >{props.title}</td>
                    <td >{props.author}</td>
                    <td >{props.year}</td>
                    <td style={{ width: "5rem" }}> <Image pics={props.pics} refrance={props.imageLink} /></td>
                    <td >{btn}</td>
                </tr>
            </div>
        )
    }
}