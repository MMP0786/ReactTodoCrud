import React, { Component } from "react";

export default class HeaderC extends Component {
  render() {
    return (
      <div>
        <div className="header" >
          <span style={{marginRight:"130px"}}>Header</span> 
          <label htmlFor="" >Search </label>
          <input type="search" name="" id="" onChange={(e)=>this.props.searchText(e.target.value)}/>
          <span className="plus" 
          onClick={()=> this.props.changeStatus(true)} >
            +
          </span>
        </div>

      </div>
    );
  }
}
