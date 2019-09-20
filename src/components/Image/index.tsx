import React from 'react'

export default class Book extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = {}
    }
    render() {

        const { pics, refrance } = this.props
        const index: number = pics.findIndex((item: any) => { return item.slice(14).split(".")[0] === refrance.slice(7).split(".")[0] })
        return (
            <img src={pics[index] || refrance } className="card-img-top" alt="." />
        )
    }
}