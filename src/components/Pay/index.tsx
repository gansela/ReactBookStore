import React from 'react';


export default class Pay extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = { creditCard : "", idNum : 0 }
    }

    savePay = (creditCard:string, idNum:number):void => {
        this.setState({ creditCard, idNum })
    }

    render() {
        
        const {creditCard, idNum} = this.state
                return (
            
            <div className="container row ml-5">
                Credit Card <input className="col-2 mr-1 " type="text" onChange={(e) => {
                        const value: string = e.target.value;
                        this.savePay(value, idNum)
                    }} />
                ID <input className="col-2 mr-1" type="number" onChange={(e) => {
                        const value : number = parseInt(e.target.value);
                        this.savePay (creditCard,value) }}  />
                    <button className="col-1 ml-1" onClick={(e) => alert(creditCard + idNum)}>Pay </button>
            </div>
        )
    }
}