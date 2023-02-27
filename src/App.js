import './App.css';
import React, { Component } from 'react'
import MainC from './components/MainC';
import FooterC from './components/FooterC';
import HeaderC from './components/HeaderC';
import TodoC from './components/TodoC';

 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       modalStaus: false,
       todos: [
       {
        id:1, 
       name:"this is name", 
       description:"this is descr", 
       status: "done"
      }
      ],
      //  searchText:" ",
       filteredSearch: [],
      currentEditModal:{}
    }
  }
  componentDidMount() {
    this.setState({ todos: JSON.parse(localStorage.getItem("todoItem")) });
  }
  componentDidUpdate() {
    localStorage.setItem("todoItem", JSON.stringify(this.state.todos));
  }

  changeModalStatus = (status, id)=>{
    this.setState({
      modalStaus:status,
      currentEditModal: this.state.todos.filter((ele)=> ele.id===id)[0]
    })
  }

  
  createTodo = (name, description, status)=>{
    if(name && status){
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: Date.now(),
            name: name,
            description: description,
            status: status
          }
        ],
        modalStaus:false
      })
    }
    console.log(this.state.todos)
  }

  changeSearch = (text)=>{
    const tempFiltered = this.state.todos.filter((ele)=>{
      return(
  
        ele.name.toLowerCase().includes(text.toLowerCase())
        ||
        ele.description.toLowerCase().includes(text.toLowerCase())||
        ele.status.toLowerCase().includes(text.toLowerCase())
      )
    });
  
    this.setState({filteredSearch: tempFiltered})
    this.setState({searchText:text})
    console.log("tempFiltered", tempFiltered)
    console.log(text)
  }
  


  deleteTodo = (id)=>{
    this.setState({todos: this.state.todos.filter(ele=> ele.id!==id)});
  }

  updateTodo= (id, name, des, status)=>{
    const temp = this.state.todos.map(ele => {
      if(ele.id===id){
        return {
          id,
          name,
          des,
          status
        }
      }
      return ele;
    })
    this.setState({todos:temp})
  }
  render() {
    return (
      <div>
        <div className='App'>
          <HeaderC
          changeStatus={this.changeModalStatus}
           searchText={this.changeSearch}/>
          <MainC changeStatus={this.changeModalStatus}
           todos={
            this.state.searchText ? this.state.filteredSearch : this.state.todos
          } deleteTodo={this.deleteTodo}
          
          />
          {this.state.modalStaus && <TodoC 
          changeStatus={this.changeModalStatus}
          createTodo={this.createTodo}
           updateTodo={this.updateTodo}
           currentEditModal={this.state.currentEditModal}
          />}
          <FooterC/>
        </div>
      </div>
    )
  }
}


export default App;
