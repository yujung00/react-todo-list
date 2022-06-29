import React, {Component} from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component{
    render() {
        const {todos, onToggle, onRemove} = this.props;
        return (
          <div>
              <TodoItem text="hi"/>
              <TodoItem text="react"/>
              <TodoItem text="!"/>
          </div>
        );
    }
}

export default TodoItemList;