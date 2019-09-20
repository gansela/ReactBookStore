import React from 'react';
import Book from "../Book";

export default class BookList extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = {}
    }
    render() {
        const { list, pic, isOpacity } = this.props
        return (
            <div>
                {list.map((item: any) => <Book key={item.title} {...item} pics={pic} hebrew={isOpacity} />)}
            </div>
        )
    }
}