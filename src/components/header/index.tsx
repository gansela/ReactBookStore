import React from 'react';

const styleHeaderDiv = {margin: "20px", padding: "20px", border:" solid black 3px", color: "blue", }
const styleHeader = {  textDecorationLine: 'underline',}

export default class Header extends React.Component<any, any> {
    render() {
        
      return (
      <div style= {styleHeaderDiv}>
          <h1 className="text-center" style= {styleHeader}>{this.props.content}</h1>
      </div>
      )
    }
  }