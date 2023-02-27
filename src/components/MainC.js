import React, { Component } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default class MainC extends Component {
  render() {
    console.log(" Main",this.props.todos)
    return (
      
      <div>
        <div className="containor-top">
      {this.props.todos.map((item)=> 
      <div className="containor" key={item.id}>
         <h2>{item.name}</h2>
         <div>{item.description}</div>
         <br></br>
         <div><button>{item.status}</button></div>
         <EditIcon className="edit-icon" onClick={() => this.props.changeStatus(true, item.id)}/>
          <DeleteIcon className="delete-icon" onClick={()=> this.props.deleteTodo(item.id)}/>

       </div>
        )}
 
       
       
      </div></div>
    )
  }
}
