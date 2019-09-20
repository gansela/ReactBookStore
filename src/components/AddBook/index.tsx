import React from 'react';


export default class AddBook extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = { title: "", author: "", year: "0", language: "", imageLink: "" }
    }

    saveNewBook(title: string, author: string, year: string, language: string, imageLink: string) {
        this.setState({ title, author, year, language, imageLink })
    }

    render() {
        const {addNewBook} = this.props
        const {title, author, year, language, imageLink} = this.state
        const sendDown = { ...this.state }
        return (
            
            <div className="container row ml-5">
                title <input className="col-2 mr-1 " type="text" onChange={(e) => {
                        const value = e.target.value;
                        this.saveNewBook(value, author, year, language, imageLink)
                    }} />
                author <input className="col-2 mr-1" type="text" onChange={(e) => {
                        const value = e.target.value;
                        this.saveNewBook(title, value, year, language, imageLink) }}  />
                year <input className="col-1 mr-1" type="number" onChange={(e) => {
                        const value = e.target.value;
                        this.saveNewBook(title, author, value, language, imageLink) }}  />
                language<input className="col-1 mr-1" type="text" onChange={(e) => {
                        const value = e.target.value;
                        this.saveNewBook(title, author, year, value, imageLink) }}  />
                imageLink<input className="col-2 mr-1" type="text" onChange={(e) => {
                        const value = e.target.value;
                        this.saveNewBook(title, author, year, language, value) }} />
                <button className="col-1 ml-1" onClick={(e) => addNewBook(sendDown)}>Add </button>
            </div>
        )
    }
}