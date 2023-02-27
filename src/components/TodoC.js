import React, { Component } from 'react'
import { TextField,InputLabel, Select, MenuItem, Button } from "@mui/material";

export default class TodoC extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: this.props.currentEditModal ? this.props.currentEditModal.name:"",
       description:this.props.currentEditModal ? this.props.currentEditModal.description:"",
       status:this.props.currentEditModal ? this.props.currentEditModal.status:"",
    }
  }

  createTodo = (e) => {
    if(this.props.currentEditModal){
      this.props.updateTodo(this.props.currentEditModal.id, this.state.title, this.state.description, this.state.status)
    }else{

      this.props.createTodo(this.state.title, this.state.description, this.state.status);
    }
     this.props.changeStatus(false)
  }
  render() {
    return (
      <>
      <div className="modal">
        <h2>{this.props.currentEditModal ? "Update Todo" : "Create To Do"}</h2>
        <TextField
          id="outlined-basic"
        
          value={this.state.title}
          name="title"
          label="Title add"
          variant="outlined"
          onChange={(e)=>this.setState({title: e.target.value})}
        />
        <TextField
          id="outlined-basic1"
          label="Description add"
          variant="outlined"
          name="description"
          onChange={(e)=>this.setState({description: e.target.value})}
          value={this.state.description}
        />
        
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          onChange={(e) => this.setState({ status: e.target.value})}
          value={this.state.status}

          // value={age}
          // label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={"In progress"}>In Progress</MenuItem>
          <MenuItem value={"Done"}>Done</MenuItem>
          <MenuItem value={"May be"}>May be</MenuItem>
        </Select>
        <div className="Add">
          <Button variant="contained" color="success" 
         onClick={this.createTodo}>
            {this.props.currentEditModal? "update":"Add"}
          </Button>
          <Button variant="contained" color="warning" 
           onClick={()=>this.props.changeStatus(false)} >
            Cancel
          </Button>
        </div>
      </div>
    </>
    )
  }
}
