import React from 'react';
import TdBook from "../TdBook";

export default class TableList extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = {}
    }
    render() {
        const { list, pic, isOpacity, func } = this.props
        return (
            <div>

                <table className="table">
                    <thead>
                        <tr  className=" d-flex justify-content-between" style={{border: "black solid 1px"}}>
                            <th scope="col" className="col-1">#</th>
                            <th scope="col" className="col-1" >Title</th>
                            <th scope="col" className="col-1">Author</th>
                            <th scope="col" className="col-1">Year</th>
                            <th scope="col" className="col-1">image</th>
                            <th scope="col" className="col-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item: any, i:number) => <TdBook key={item.title} {...item} pics={pic} hebrew={isOpacity} hwFunc={func} num={i} />)}
                    </tbody>
                </table>
            </div >
        )
    } 
} 
