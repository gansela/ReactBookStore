import React from "react";

export default class Search extends React.Component<any, any>{

    render() {
        const { hebrew, searchValue, searchOperation, categories, languegue } = this.props
        return (
            <div className="row container m-5 ">
                 search:  <div className="ml-1 mr-5" >
                    <input onChange={(e) => {
                        const searchValue = e.target.value;
                        searchOperation(searchValue, hebrew, languegue)
                    }} />
                </div>
                 hebrew: <div className="ml-1 mr-5">
                    <input type="checkbox"  onChange={(e) => {
                        const value = e.target.checked;
                        searchOperation(searchValue, value, languegue)
                    }} />
                </div>
                languege: <div className="ml-1 mr-5">
                    <select onChange={(e) => {
                        const cat = e.target.value;
                        console.log(cat)
                        searchOperation(searchValue, hebrew, cat);

                    }}>
                        <option value="all" selected>all</option>
                        {categories.map((item: any) =>  <option value={item}>{item}</option> )}
                    </select>
                </div>
            </div>

        )
    }
}