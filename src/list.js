import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './index.css';
const TodoItem = props =>(
    <tr>
        <td className={props.todo.todoCompleted?'completed':''}>{props.todo.todoDescription}</td>
        <td className={props.todo.todoCompleted?'completed':''}>{props.todo.todoResponsible}</td>
        <td className={props.todo.todoCompleted?'completed':''}>{props.todo.todoPriority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)
export default class TodosList extends Component{
    constructor(props){
        super(props);
        this.state={todos:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
            .then(response =>{
                this.setState({todos:response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }
    todoList(){
        return this.state.todos.map((currentTodo,i)=>{
            return <TodoItem todo={currentTodo} key={i}/>
        })
    }
    render(){
        return(
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}